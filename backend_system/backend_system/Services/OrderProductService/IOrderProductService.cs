using backend_system.Models;
using static backend_system.Services.OrderProductService.OrderProductService;

namespace backend_system.Services.OrderProductService
{
    public interface IOrderProductService
    {
        Task<OrderProduct?> AddOrderProduct(OrderProductInput request);

        Task<OrderProduct?> GetOrderProduct(string id);
    }
}
