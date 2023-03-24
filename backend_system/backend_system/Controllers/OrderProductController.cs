using backend_system.Models;
using backend_system.Services.OrderProductService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using static backend_system.Services.OrderProductService.OrderProductService;

namespace backend_system.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderProductController : ControllerBase
    {
        private readonly IOrderProductService _orderProductService;
        private readonly GandaYarnDatabaseContext _context;

        public OrderProductController(IOrderProductService orderProductService, GandaYarnDatabaseContext context)
        {
            _orderProductService = orderProductService;
            _context = context;
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<Order?>> AddOrderProduct([FromBody] OrderProductInput request)
        {
            var result = await _orderProductService.AddOrderProduct(request);

            return Ok(result);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<Order?>> GetOrderProduct([FromRoute] string id)
        {
            var result = await _orderProductService.GetOrderProduct(id);

            return Ok(result);
        }
    }
}
