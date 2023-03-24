using backend_system.Helper;
using backend_system.Models;
using backend_system.Services.CartService;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.WebUtilities;
using static backend_system.Services.CartService.CartService;

namespace backend_system.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly ICartService _cartService;
        private readonly GandaYarnDatabaseContext _context;

        public CartController(ICartService cartService, GandaYarnDatabaseContext context)
        {
            _cartService = cartService;
            _context = context;
        }

        [HttpGet("all")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<List<Cart>>> GetAllCarts()
        {
            return await _cartService.GetAllCarts();
        }

        [HttpGet("{user_id:int}&{product_id:int}&{attribute_id:int}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<Cart>> GetCart(string user_id, string product_id, string attribute_id)
        {
            var result = await _cartService.GetCart(user_id, product_id, attribute_id);
            if (result is null)
                return NotFound("Cart doesn't exist.");

            return Ok(result);
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<List<Cart>>> GetCartsOfUser([FromHeader] string? session_id)
        {
            var user = await SessionHelper.GetUserFromSession(_context, session_id);

            if (user == null) {
                return NotFound("User not found");
            }

            var result = await _cartService.GetCartsOfUser(user.Id);

            if (result is null)
                return NotFound("User doesn't have products in their cart yet.");

            return Ok(result);
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<List<Cart>>> AddCart([FromBody] CartInput request, [FromHeader] string? session_id)
        {
            var user = await SessionHelper.GetUserFromSession(_context, session_id);

            if (user == null)
            {
                return NotFound("User not found");
            }

            var result = await _cartService.AddCart(request);

            return Ok(result);
        }

        [HttpPut]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<List<Cart>>> UpdateCart([FromHeader] string? session_id, [FromBody] CartInput request)
        {
            var user = await SessionHelper.GetUserFromSession(_context, session_id);

            if (user == null)
            {
                return NotFound("User not found");
            }

            if (user.Id != request.UserId)
            {
                return NotFound("User not found");
            }

            var result = await _cartService.UpdateCart(request);
            if (result is null)
                return NotFound("Cart doesn't exist.");

            return Ok(result);
        }

        [HttpPost("delete")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<List<Cart>>> DeleteCart([FromHeader] string? session_id, CartInput request)
        {
            var user = await SessionHelper.GetUserFromSession(_context, session_id);

            if (user == null)
            {
                return NotFound("User not found");
            }

            if (user.Id != request.UserId)
            {
                return NotFound("User not found");
            }
            
            var result = await _cartService.DeleteCart(request);
            if (result is null)
                return NotFound("Cart doesn't exist.");

            return Ok(result);
        }
    }
}
