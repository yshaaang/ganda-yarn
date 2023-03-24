using backend_system.Helper;
using backend_system.Models;
using backend_system.Services.OrderService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using static backend_system.Services.OrderService.OrderService;

namespace backend_system.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderService _orderService;
        private readonly GandaYarnDatabaseContext _context;

        public OrderController(IOrderService orderService, GandaYarnDatabaseContext context)
        {
            _orderService = orderService;
            _context = context;
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<Order?>> AddOrder([FromBody] OrderInput request, [FromHeader] string? session_id)
        {
            var user = await SessionHelper.GetUserFromSession(_context, session_id);

            if (user == null)
            {
                return NotFound("User not found");
            }

            var result = await _orderService.AddOrder(request);

            return Ok(result);
        }

        [HttpGet("all")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<List<Order>>> GetOrder([FromHeader] string? session_id)
        {
            var user = await SessionHelper.GetUserFromSession(_context, session_id);

            if (user == null)
            {
                return NotFound("User not found");
            }

            var orders = await _orderService.GetOrders(user.Id);

            return Ok(orders);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<Order?>> GetOrder([FromRoute] string id, [FromHeader] string? session_id)
        {
            var user = await SessionHelper.GetUserFromSession(_context, session_id);

            if (user == null)
            {
                return NotFound("User not found");
            }

            var order = await _orderService.GetOrder(id);

            if (order == null)
            {
                return NotFound("Order not found.");
            }

            if (order.UserId != user.Id)
            {
                return Unauthorized("No access");
            }

            return Ok(order);
        }
    }
}
