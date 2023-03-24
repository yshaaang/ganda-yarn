using backend_system.Models;
using static backend_system.Services.OrderService.OrderService;

namespace backend_system.Services.OrderService
{
    public interface IOrderService
    {
        Task<Order?> AddOrder(OrderInput request);
        Task<Order?> GetOrder(string id);

        Task<List<Order>> GetOrders(string userId);
    }
}
