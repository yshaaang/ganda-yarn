using backend_system.Models;

namespace backend_system.Services.ProductService
{
    public interface IProductService
    {
        Task<List<Product>> GetAllProducts();
        Task<Product?> GetProduct(string id);
        Task<List<Product>> AddProduct(Product product);
        Task<List<Product>?> UpdateProduct(string id, Product request);
        Task<List<Product>?> DeleteProduct(string id);
    }
}
