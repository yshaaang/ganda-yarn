using backend_system.Models;
using backend_system.Services.OrderProductService;
using backend_system.Services.OrderStatusService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using static backend_system.Services.OrderProductService.OrderProductService;

namespace backend_system.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderStatusController : ControllerBase
    {
        private readonly IOrderStatusService _orderStatusService;
        private readonly GandaYarnDatabaseContext _context;

        public OrderStatusController(IOrderStatusService orderStatusService, GandaYarnDatabaseContext context)
        {
            _orderStatusService = orderStatusService;
            _context = context;
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<List<Status>>> GetStatuses()
        {
            var result = await _orderStatusService.GetStatuses();

            return Ok(result);
        }
    }
}
