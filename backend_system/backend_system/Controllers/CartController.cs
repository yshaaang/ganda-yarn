using backend_system.Models;
using backend_system.Services.CartService;
using Microsoft.AspNetCore.Mvc;

namespace backend_system.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly ICartService _cartService;

        public CartController(ICartService cartService)
        {
            _cartService = cartService;
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<List<Cart>>> GetAllCarts()
        {
            return await _cartService.GetAllCarts();
        }

        [HttpGet("{user_id:int}&{product_id:int}&{attribute_id:int}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<Cart>> GetCart(int user_id, int product_id, int attribute_id)
        {
            var result = await _cartService.GetCart(user_id, product_id, attribute_id);
            if (result is null)
                return NotFound("Cart doesn't exist.");

            return Ok(result);
        }

        [HttpGet("{user_id:int}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<Cart>> GetCartsOfUser(int user_id)
        {
            var result = await _cartService.GetCartsOfUser(user_id);
            if (result is null)
                return NotFound("User doesn't have products in their cart yet.");

            return Ok(result);
        }

        [HttpPost("{id:int}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<List<Cart>>> AddCart([FromBody] Cart cart)
        {
            var result = await _cartService.AddCart(cart);

            return Ok(result);
        }

        [HttpPut]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<List<Cart>>> UpdateCart(int user_id, int product_id, int attribute_id, [FromBody] Cart request)
        {
            var result = await _cartService.UpdateCart(user_id, product_id, attribute_id, request);
            if (result is null)
                return NotFound("Cart doesn't exist.");

            return Ok(result);
        }

        [HttpDelete]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<List<Cart>>> DeleteCart(int user_id, int product_id, int attribute_id)
        {
            var result = await _cartService.DeleteCart(user_id, product_id, attribute_id);
            if (result is null)
                return NotFound("Cart doesn't exist.");

            return Ok(result);
        }
    }
}
