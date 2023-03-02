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

        public async Task<List<Cart>> AddCart(Cart cart)
        {
            _context.Carts.Add(cart);
            await _context.SaveChangesAsync();

            return await _context.Carts.ToListAsync();
        }

        public async Task<List<Cart>?> DeleteCart(int user_id, int product_id, int attribute_id)
        {
            var cart = await _context.Carts.Where(cart => cart.UserId == user_id && cart.ProductId == product_id && cart.AttributeId == attribute_id).FirstOrDefaultAsync();
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

        public async Task<Cart?> GetCart(int user_id, int product_id, int attribute_id)
        {
            var cart = await _context.Carts.Where(cart => cart.UserId == user_id && cart.ProductId == product_id && cart.AttributeId == attribute_id).Include(cart => cart.User).Include(cart => cart.Product).Include(cart => cart.Attribute).FirstOrDefaultAsync();

            return cart;
        }

        public async Task<List<Cart>?> GetCartsOfUser(int user_id)
        {
            var carts = await _context.Carts.Where(cart => cart.UserId == user_id).Include(cart => cart.User).Include(cart => cart.Product).Include(cart => cart.Attribute).ToListAsync();

            return carts;
        }

        public async Task<List<Cart>?> UpdateCart(int user_id, int product_id, int attribute_id, Cart request)
        {
            var cart = await _context.Carts.Where(cart => cart.UserId == user_id && cart.ProductId == product_id && cart.AttributeId == attribute_id).Include(cart => cart.User).Include(cart => cart.Product).Include(cart => cart.Attribute).FirstOrDefaultAsync();
            if (cart is null)
                return null;

            cart.UserId = request.UserId;
            cart.ProductId = request.ProductId;
            cart.AttributeId = request.AttributeId;
            cart.Quantity = request.Quantity;
            cart.TotalPrice = request.TotalPrice;
            cart.ModifiedAt = DateTime.Now;

            await _context.SaveChangesAsync();

            return await _context.Carts.ToListAsync();
        }
    }
}
