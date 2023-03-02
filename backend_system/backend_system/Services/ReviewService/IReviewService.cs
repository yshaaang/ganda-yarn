using backend_system.Models;

namespace backend_system.Services.ReviewService
{
    public interface IReviewService
    {
        Task<List<Review>> GetAllReviews();
        Task<Review?> GetReview(int id);
        Task<List<Review>> GetReviewsOfProduct(int order_product_id);
        Task<List<Review>> AddReview(Review review);
        Task<List<Review>?> UpdateReview(int id, Review request);
        Task<List<Review>?> DeleteReview(int id);
    }
}
