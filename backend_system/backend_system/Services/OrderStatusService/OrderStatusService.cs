using backend_system.Models;
using backend_system.Services.OrderService;
using backend_system.Services.OrderStatusService;
using Microsoft.EntityFrameworkCore;
using static backend_system.Services.OrderService.OrderService;

namespace backend_system.Services.OrderStatus
{
    public class OrderStatusService : IOrderStatusService
    {
        private readonly GandaYarnDatabaseContext _context;

        public OrderStatusService(GandaYarnDatabaseContext context)
        {
            _context = context;
        }

        public async Task<List<Status>> GetStatuses()
        {
            return await _context.Statuses.ToListAsync();
        }
    }
}
