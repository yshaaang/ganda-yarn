using backend_system.Models;

namespace backend_system.Services.ReviewService
{
    public interface IReviewService
    {
        Task<List<Review>> GetAllReviews();
        Task<Review?> GetReview(string id);
        Task<List<Review>> GetReviewsOfProduct(string order_product_id);
        Task<Review?> AddReview(ReviewInput review);
        Task<List<Review>?> UpdateReview(string id, ReviewInput request);
        Task<List<Review>?> DeleteReview(string id);
    }

    public class ReviewInput
    {
        public string OrderProductId { get; set; } = null!;
        public string UserId { get; set; } = null!;

        public int Rate { get; set; }

        public string Comment { get; set; } = null!;
    }
}
