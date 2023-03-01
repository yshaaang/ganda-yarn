using backend_system.Models;
using backend_system.Services.ProductAttributeService;
using Microsoft.AspNetCore.Mvc;

namespace backend_system.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductAttributeController : ControllerBase
    {
        private readonly IProductAttributeService _productAttributeService;

        public ProductAttributeController(IProductAttributeService productAttributeService)
        {
            _productAttributeService = productAttributeService;
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<List<ProductAttribute>>> GetAllProductAttributes()
        {
            return await _productAttributeService.GetAllProductAttributes();
        }

        [HttpGet("{id:int}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<ProductAttribute>> GetProductAttribute(int id)
        {
            var result = await _productAttributeService.GetProductAttribute(id);
            if (result is null)
                return NotFound("Product attribute doesn't exist.");

            return Ok(result);
        }

        [HttpPost("id:int")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<List<ProductAttribute>>> AddProductAttribute([FromBody] ProductAttribute productAttribute)
        {
            var result = await _productAttributeService.AddProductAttribute(productAttribute);

            return Ok(result);
        }

        [HttpPut]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<List<ProductAttribute>>> UpdateProductAttribute(int id, [FromBody] ProductAttribute request)
        {
            var result = await _productAttributeService.UpdateProductAttribute(id, request);
            if (result is null)
                return NotFound("Product attribute doesn't exist.");

            return Ok(result);
        }

        [HttpDelete]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<List<ProductAttribute>>> DeleteProductAttribute(int id)
        {
            var result = await _productAttributeService.DeleteProductAttribute(id);
            if (result is null)
                return NotFound("Product attribute doesn't exist.");

            return Ok(result);
        }
    }
}
