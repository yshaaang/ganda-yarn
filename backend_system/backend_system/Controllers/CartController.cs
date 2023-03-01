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

        //[HttpGet("{id:int}")] {GetCart}
        //[ProducesResponseType(StatusCodes.Status200OK)]
        //[ProducesResponseType(StatusCodes.Status404NotFound)]
        //public async Task<ActionResult<Admin>> GetAdmin(int id)
        //{
        //    var result = await _adminService.GetAdmin(id);
        //    if (result is null)
        //        return NotFound("Admin doesn't exist.");

        //    return Ok(result);
        //}

        [HttpPost("id:int")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<List<Cart>>> AddCart([FromBody] Cart cart)
        {
            var result = await _cartService.AddCart(cart);

            return Ok(result);
        }

        [HttpPut]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<List<Cart>>> UpdateCart(int id, [FromBody] Cart request)
        {
            var result = await _cartService.UpdateCart(id, request);
            if (result is null)
                return NotFound("Cart doesn't exist.");

            return Ok(result);
        }

        [HttpDelete]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<List<Cart>>> DeleteCart(int id)
        {
            var result = await _cartService.DeleteCart(id);
            if (result is null)
                return NotFound("Cart doesn't exist.");

            return Ok(result);
        }
    }
}
