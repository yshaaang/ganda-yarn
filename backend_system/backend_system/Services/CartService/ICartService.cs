using backend_system.Models;
using Microsoft.EntityFrameworkCore;

namespace backend_system.Services.CartService
{
    public interface ICartService
    {
        Task<List<Cart>> GetAllCarts();
        Task<Cart?> GetCart(int user_id, int product_id, int attribute_id);
        Task<List<Cart>?> GetCartsOfUser(int user_id);
        Task<List<Cart>> AddCart(Cart cart);
        Task<List<Cart>?> UpdateCart(int user_id, int product_id, int attribute_id, Cart request);
        Task<List<Cart>?> DeleteCart(int user_id, int product_id, int attribute_id);
    }
}
