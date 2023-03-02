using backend_system.Models;
using backend_system.Services.ProductService;
using Microsoft.AspNetCore.Mvc;

namespace backend_system.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _productService;

        public ProductController(IProductService productService)
        {
            _productService = productService;
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<List<Product>>> GetAllProducts()
        {
            return await _productService.GetAllProducts();
        }

        [HttpGet("{id:int}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            var result = await _productService.GetProduct(id);
            if (result is null)
                return NotFound("Product doesn't exist.");

            return Ok(result);
        }

        [HttpPost("{id:int}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<List<Product>>> AddProduct([FromBody] Product product)
        {
            var result = await _productService.AddProduct(product);

            return Ok(result);
        }

        [HttpPut]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<List<Product>>> UpdateProduct(int id, [FromBody] Product request)
        {
            var result = await _productService.UpdateProduct(id, request);
            if (result is null)
                return NotFound("Product doesn't exist.");

            return Ok(result);
        }

        [HttpDelete]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<List<Product>>> DeleteProduct(int id)
        {
            var result = await _productService.DeleteProduct(id);
            if (result is null)
                return NotFound("Product doesn't exist.");

            return Ok(result);
        }
    }
}
