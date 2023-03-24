using backend_system.Models;
using Microsoft.EntityFrameworkCore;

namespace backend_system.Services.OrderService
{
    public class OrderService : IOrderService
    {
        private readonly GandaYarnDatabaseContext _context;

        public OrderService(GandaYarnDatabaseContext context)
        {
            _context = context;
        }

        public async Task<Order?> AddOrder(OrderInput request)
        {
            var user = await _context.Users.FindAsync(request.UserId);

            var order = new Order()
            {
                Id = Guid.NewGuid().ToString(),
                UserId = user.Id,
                User = user,
                FirstName = request.FirstName,
                LastName = request.LastName,
                EmailAddress = request.EmailAddress,
                MobileNumber = request.MobileNumber,
                HomeAddress = request.HomeAddress,
                CreatedAt = DateTime.UtcNow,
                StatusCode = "PRC",
            };

            await _context.Orders.AddAsync(order);
            await _context.SaveChangesAsync();

            foreach (var cartId in request.CartIds)
            {
                var cart = await _context.Carts
                    .Include(cart => cart.Attribute)
                    .Include(cart => cart.Product)
                    .Where(cart => cart.Id == cartId)
                    .FirstOrDefaultAsync();

                if (cart == null)
                {
                    continue;
                }

                var canGet = Math.Min(cart.Attribute.Stock, cart.Quantity);

                cart.Attribute.Stock -= canGet;
                cart.Attribute.Sold += canGet;

                var cartsWithSameAttribute = await _context.Carts.Where(cart => cart.AttributeId == cart.Attribute.Id).ToListAsync();

                foreach (var cartWithSameAttribute in cartsWithSameAttribute)
                {
                    cartWithSameAttribute.Quantity = Math.Min(cartWithSameAttribute.Quantity, cart.Attribute.Stock);
                }

                var orderProduct = new OrderProduct
                {
                    Id = Guid.NewGuid().ToString(),
                    User = user,
                    UserId = user.Id,
                    Order = order,
                    OrderId = order.Id,
                    Product = cart.Product,
                    ProductId = cart.ProductId,
                    Attribute = cart.Attribute,
                    AttributeId = cart.AttributeId,
                    Price = cart.Attribute.Price,
                    Quantity = canGet,
                    CreatedAt = DateTime.UtcNow,
                };

                await _context.OrderProducts.AddAsync(orderProduct);
                await _context.SaveChangesAsync();

                await _context.Carts.Where(cart => cart.Id == cartId).ExecuteDeleteAsync();

                order.OrderProducts.Add(orderProduct);
            }

            await _context.SaveChangesAsync();

            return order;
        }

        public async Task<Order?> GetOrder(string id)
        {
            var order = await _context.Orders
                .Where(order => order.Id == id)
                .Include(order => order.StatusCodeNavigation)
                .Include(order => order.OrderProducts)
                    .ThenInclude(orderProduct => orderProduct.Attribute)
                .Include(order => order.OrderProducts)
                    .ThenInclude(orderProduct => orderProduct.Product)
                .Include(order => order.OrderProducts)
                    .ThenInclude(orderProduct => orderProduct.Review)
                .FirstOrDefaultAsync();

            return order;
        }

        public async Task<List<Order>> GetOrders(string userId)
        {
            var orders = await _context.Orders
                .Where(order => order.UserId == userId)
                .Include(order => order.StatusCodeNavigation)
                .Include(order => order.OrderProducts)
                    .ThenInclude(orderProduct => orderProduct.Attribute)
                .Include(order => order.OrderProducts)
                    .ThenInclude(orderProduct => orderProduct.Product)
                .Include(order => order.OrderProducts)
                    .ThenInclude(orderProduct => orderProduct.Review)
                .AsNoTracking()
                .ToListAsync();

            return orders;
        }

        //public async Task<List<User>?> DeleteUser(int id)
        //{
        //    var user = await _context.Users.FindAsync(id);
        //    if (user is null)
        //        return null;

        //    _context.Users.Remove(user);
        //    await _context.SaveChangesAsync();

        //    return await _context.Users.ToListAsync();
        //}

        //public async Task<List<User>> GetAllUsers()
        //{
        //    var users = await _context.Users.ToListAsync();

        //    return users;
        //}

        //public async Task<User?> GetUser(int id)
        //{
        //    var user = await _context.Users.FindAsync(id);
        //    if (user is null)
        //        return null;

        //    return user;
        //}

        //public async Task<List<User>?> UpdateUser(int id, User request)
        //{
        //    var user = await _context.Users.FindAsync(id);
        //    if (user is null)
        //        return null;

        //    user.Id = request.Id;
        //    user.Username = request.Username;
        //    user.Password = request.Password;
        //    user.FirstName = request.FirstName;
        //    user.LastName = request.LastName;
        //    user.Gender = request.Gender;
        //    user.MobileNumber = request.MobileNumber;
        //    user.HomeAddress = request.HomeAddress;
        //    user.EmailAddress = request.EmailAddress;
        //    user.ModifiedAt = DateTime.Now;

        //    await _context.SaveChangesAsync();

        //    return await _context.Users.ToListAsync();
        //}

        public class OrderInput
        {
            public string UserId { get; set; }

            public string FirstName { get; set; } = null!;

            public string LastName { get; set; } = null!;

            public string MobileNumber { get; set; } = null!;

            public string HomeAddress { get; set; } = null!;

            public string EmailAddress { get; set; } = null!;

            public List<string> CartIds { get; set; } = null!;


        }
    }
}
