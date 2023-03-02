using backend_system.Models;
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

        public async Task<List<Review>> AddReview(Review review)
        {
            _context.Reviews.Add(review);
            await _context.SaveChangesAsync();

            return await _context.Reviews.ToListAsync();
        }

        public async Task<List<Review>?> DeleteReview(int id)
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

        public async Task<Review?> GetReview(int id)
        {
            var review = await _context.Reviews.Where(review => review.Id == id).FirstOrDefaultAsync();

            return review;
        }

        public async Task<List<Review>> GetReviewsOfProduct(int product_id)
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

        public async Task<List<Review>?> UpdateReview(int id, Review request)
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
