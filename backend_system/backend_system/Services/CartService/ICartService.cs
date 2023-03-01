using backend_system.Models;

namespace backend_system.Services.CartService
{
    public interface ICartService
    {
        Task<List<Cart>> GetAllCarts();
        Task<List<Cart>> AddCart(Cart cart);
        Task<List<Cart>?> UpdateCart(int id, Cart request);
        Task<List<Cart>?> DeleteCart(int id);
    }
}
