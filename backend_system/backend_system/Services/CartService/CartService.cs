using backend_system.Models;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace backend_system.Services.CartService
{
    public class CartService : ICartService
    {
        private readonly GandaYarnDatabaseContext _context;

        public CartService(GandaYarnDatabaseContext context)
        {
            _context = context;
        }

        public async Task<List<Cart>> AddCart(CartInput request)
        {
            var user = await _context.Users.Where(input => input.Id == request.UserId).FirstOrDefaultAsync();
            var product = await _context.Products.Where(input => input.Id == request.ProductId).FirstOrDefaultAsync();
            var product_attribute = await _context.ProductAttributes.Where(input => input.Id == request.AttributeId).FirstOrDefaultAsync();

            var existingCart = await _context.Carts
                .Where(existing => existing.UserId == request.UserId && existing.ProductId == request.ProductId && existing.AttributeId == request.AttributeId)
                .Include(existing => existing.Attribute)
                .FirstOrDefaultAsync();

            if (existingCart != null)
            {
                if (existingCart.Quantity + 1 <= existingCart.Attribute.Stock)
                {
                    existingCart.Quantity++;
                }
                else
                {
                    await _context.SaveChangesAsync();

                    return null;
                }
                
            }
            else
            {
                var cart = new Cart()
                {
                    Id = Guid.NewGuid().ToString(),
                    UserId = user.Id,
                    ProductId = product.Id,
                    AttributeId = product_attribute.Id,
                    Quantity = 1,
                    TotalPrice = product_attribute.Price,
                    User = user,
                    Product = product,
                    Attribute = product_attribute,
                    CreatedAt = DateTime.UtcNow
                };
                
                await _context.Carts.AddAsync(cart);
            }

            await _context.SaveChangesAsync();

            return await _context.Carts.ToListAsync();
        }

        public async Task<List<Cart>?> DeleteCart(CartInput request)
        {
            var cart = await _context.Carts.Where(cart => cart.UserId == request.UserId && cart.ProductId == request.ProductId && cart.AttributeId == request.AttributeId).FirstOrDefaultAsync();
            if (cart is null)
                return null;

            _context.Carts.Remove(cart);
            await _context.SaveChangesAsync();

            return await _context.Carts.ToListAsync();
        }

        public async Task<List<Cart>> GetAllCarts()
        {
            var carts = await _context.Carts.ToListAsync();

            return carts;
        }

        public async Task<Cart?> GetCart(string user_id, string product_id, string attribute_id)
        {
            var cart = await _context.Carts
                .Where(cart => cart.UserId == user_id && cart.ProductId == product_id && cart.AttributeId == attribute_id)
                .Include(cart => cart.User)
                .Include(cart => cart.Product)
                .Include(cart => cart.Attribute)
                .FirstOrDefaultAsync();

            return cart;
        }

        public async Task<List<Cart>> GetCartsOfUser(string user_id)
        {
            var carts = await _context.Carts.Where(cart => cart.UserId == user_id).Include(cart => cart.User).Include(cart => cart.Product).Include(cart => cart.Attribute).ToListAsync();

            return carts;
        }

        public async Task<List<Cart>?> UpdateCart(CartInput request)
        {
            var cart = await _context.Carts
                .Where(cart => cart.UserId == request.UserId && cart.ProductId == request.ProductId && cart.AttributeId == request.AttributeId)
                .Include(cart => cart.User)
                .Include(cart => cart.Product)
                .Include(cart => cart.Attribute)
                .FirstOrDefaultAsync();

            if (cart is null)
                return null;

            cart.UserId = request.UserId;
            cart.ProductId = request.ProductId;
            cart.AttributeId = request.AttributeId;
            cart.Quantity = request.Quantity;
            cart.ModifiedAt = DateTime.Now;

            await _context.SaveChangesAsync();

            return await _context.Carts.ToListAsync();
        }


        public class CartInput {
            public string UserId { get; set; }

            public string ProductId { get; set; }

            public string AttributeId { get; set; }

            public int Quantity { get; set; }
        }
    }
}
