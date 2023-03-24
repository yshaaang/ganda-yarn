using backend_system.Helper;
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
        private readonly GandaYarnDatabaseContext _context;

        public ReviewController(IReviewService reviewService, GandaYarnDatabaseContext context)
        {
            _reviewService = reviewService;
            _context = context;
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
        public async Task<ActionResult<Review>> GetReview(string id)
        {
            var result = await _reviewService.GetReview(id);
            if (result is null)
                return NotFound("Review doesn't exist.");

            return Ok(result);
        }

        [HttpGet("Product/{product_id:int}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<List<Review>>> GetReviewsOfProduct(string product_id)
        {
            var result = await _reviewService.GetReviewsOfProduct(product_id);

            return Ok(result);
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<Review?>> AddReview([FromHeader] string? session_id, [FromBody] ReviewInput review)
        {
            var user = await SessionHelper.GetUserFromSession(_context, session_id);

            if (user == null)
            {
                return NotFound("User not found");
            }

            var result = await _reviewService.AddReview(review);

            return Ok(result);
        }

        [HttpPut]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<List<Review>>> UpdateReview(string id, [FromBody] ReviewInput request)
        {
            var result = await _reviewService.UpdateReview(id, request);
            if (result is null)
                return NotFound("Review doesn't exist.");

            return Ok(result);
        }

        [HttpDelete]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<List<Review>>> DeleteReview(string id)
        {
            var result = await _reviewService.DeleteReview(id);
            if (result is null)
                return NotFound("Review doesn't exist.");

            return Ok(result);
        }
    }
}
