using backend_system.Models;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Linq;
using static backend_system.Services.OrderService.OrderService;

namespace backend_system.Services.OrderProductService
{
    public class OrderProductService : IOrderProductService
    {
        private readonly GandaYarnDatabaseContext _context;

        public OrderProductService(GandaYarnDatabaseContext context)
        {
            _context = context;
        }

        public async Task<OrderProduct?> AddOrderProduct(OrderProductInput request)
        {
            var orderProduct = new OrderProduct()
            {
                Id = Guid.NewGuid().ToString(),
                OrderId = request.OrderId,
                UserId = request.UserId,
                ProductId = request.ProductId,
                AttributeId = request.AttributeId,
                Quantity = request.Quantity,
                Price = request.Price,
                CreatedAt = DateTime.UtcNow
            };

            await _context.OrderProducts.AddAsync(orderProduct);
            await _context.SaveChangesAsync();

            return orderProduct;
        }

        public async Task<OrderProduct?> GetOrderProduct(string id)
        {
            return await _context.OrderProducts
                .Where(orderProduct => orderProduct.Id == id)
                .Include(orderProduct => orderProduct.Review)
                .FirstOrDefaultAsync();
        }

        public class OrderProductInput
        {
            public string OrderId { get; set; }

            public string UserId { get; set; }
            public string ProductId { get; set; }
            public string AttributeId { get; set; }
            public int Quantity { get; set; }
            public decimal Price { get; set; }
        }
    }
}
