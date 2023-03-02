using backend_system.Models;
using backend_system.Services.ReviewService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend_system.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewController : ControllerBase
    {
        private readonly IReviewService _reviewService;

        public ReviewController(IReviewService reviewService)
        {
            _reviewService = reviewService;
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<List<Review>>> GetAllReviews()
        {
            return await _reviewService.GetAllReviews();
        }

        [HttpGet("{id:int}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<Review>> GetReview(int id)
        {
            var result = await _reviewService.GetReview(id);
            if (result is null)
                return NotFound("Review doesn't exist.");

            return Ok(result);
        }

        [HttpGet("Product/{product_id:int}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<List<Review>>> GetReviewsOfProduct(int product_id)
        {
            var result = await _reviewService.GetReviewsOfProduct(product_id);

            return Ok(result);
        }

        [HttpPost("{id:int}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<List<Review>>> AddReview([FromBody] Review review)
        {
            var result = await _reviewService.AddReview(review);

            return Ok(result);
        }

        [HttpPut]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<List<Review>>> UpdateReview(int id, [FromBody] Review request)
        {
            var result = await _reviewService.UpdateReview(id, request);
            if (result is null)
                return NotFound("Review doesn't exist.");

            return Ok(result);
        }

        [HttpDelete]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<List<Review>>> DeleteReview(int id)
        {
            var result = await _reviewService.DeleteReview(id);
            if (result is null)
                return NotFound("Review doesn't exist.");

            return Ok(result);
        }
    }
}
