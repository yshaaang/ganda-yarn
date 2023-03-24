using backend_system.Models;

namespace backend_system.Services.OrderStatusService
{
    public interface IOrderStatusService
    {
        Task<List<Status>> GetStatuses();
    }
}
