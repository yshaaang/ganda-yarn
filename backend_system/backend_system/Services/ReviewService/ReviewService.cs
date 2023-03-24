using backend_system.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;

namespace backend_system.Services.ReviewService
{
    public class ReviewService: IReviewService
    {
        private readonly GandaYarnDatabaseContext _context;

        public ReviewService(GandaYarnDatabaseContext context)
        {
            _context = context;
        }

        public async Task<Review?> AddReview(ReviewInput reviewInput)
        {
            var orderProduct = await _context.OrderProducts
                .Include(orderProduct => orderProduct.Order)
                    .ThenInclude(order => order.OrderProducts)
                        .ThenInclude(orderProduct => orderProduct.Review)
                .Where(orderProduct => orderProduct.Id == reviewInput.OrderProductId)
                .FirstOrDefaultAsync();

            var user = await _context.Users.FindAsync(reviewInput.UserId);

            if (orderProduct == null)
            {
                return null;
            }

            if (user == null)
            {
                return null;
            }

            var review = new Review
            {
                Id = Guid.NewGuid().ToString(),
                Rate = reviewInput.Rate,
                User = user,
                UserId= user.Id,
                Comment = reviewInput.Comment,
                OrderProduct = orderProduct,
                OrderProductId = reviewInput.OrderProductId,
                CreatedAt= DateTime.UtcNow,
            };


            var order = orderProduct.Order;
            var isAllRated = true;

            await _context.Reviews.AddAsync(review);
            await _context.SaveChangesAsync();

            foreach (var _orderProduct in order.OrderProducts)
            {
                var _review = await _context.Reviews.Where(review => review.OrderProductId == _orderProduct.Id).FirstOrDefaultAsync();
                isAllRated &= _review != null;
            }

            if (isAllRated)
            {
                var ratedStatus = await _context.Statuses.FindAsync("RTD");

                order.StatusCode = ratedStatus.Code;
                order.StatusCodeNavigation = ratedStatus;
            }

            await _context.SaveChangesAsync();

            return review;
        }

        public async Task<List<Review>?> DeleteReview(string id)
        {
            var review = await _context.Reviews.Where(review => review.Id == id).FirstOrDefaultAsync();
            if (review is null)
                return null;

            _context.Reviews.Remove(review);
            await _context.SaveChangesAsync();

            return await _context.Reviews.ToListAsync();
        }

        public async Task<List<Review>> GetAllReviews()
        {
            var reviews = await _context.Reviews.ToListAsync();

            return reviews;
        }

        public async Task<Review?> GetReview(string id)
        {
            var review = await _context.Reviews.Where(review => review.Id == id).FirstOrDefaultAsync();

            return review;
        }

        public async Task<List<Review>> GetReviewsOfProduct(string product_id)
        {
            var orderProducts = await _context.OrderProducts
                .Where(orderProduct => orderProduct.ProductId == product_id)
                .Include(orderProduct => orderProduct.Attribute).Include(orderProduct => orderProduct.Review)
                .ThenInclude(review => review.User).AsNoTracking().ToListAsync();

            var reviews = new List<Review>();
            foreach (var orderProduct in orderProducts)
            {
                if (orderProduct.Review != null)
                {
                    reviews.Add(orderProduct.Review);
                    orderProduct.Review.User = new User
                    {
                        FirstName = orderProduct.Review.User.FirstName,
                        LastName = orderProduct.Review.User.LastName
                    };
                }
            }

            return reviews;
        }

        public async Task<List<Review>?> UpdateReview(string id, ReviewInput request)
        {
            var review = await _context.Reviews.FindAsync(id);

            if (review is null)
                return null;

            review.Rate = request.Rate;
            review.Comment = request.Comment;
            review.ModifiedAt = DateTime.Now;

            await _context.SaveChangesAsync();

            return await _context.Reviews.ToListAsync();
        }

    }
}
