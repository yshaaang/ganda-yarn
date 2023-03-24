using backend_system.Models;
using Microsoft.EntityFrameworkCore;
using static backend_system.Services.CartService.CartService;

namespace backend_system.Services.CartService
{
    public interface ICartService
    {
        Task<List<Cart>> GetAllCarts();
        Task<Cart?> GetCart(string user_id, string product_id, string attribute_id);
        Task<List<Cart>> GetCartsOfUser(string user_id);
        Task<List<Cart>> AddCart(CartInput request);
        Task<List<Cart>?> UpdateCart(CartInput request);
        Task<List<Cart>?> DeleteCart(CartInput request);
    }
}
