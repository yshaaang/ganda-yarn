using backend_system.Models;

namespace backend_system.Services.ProductAttributeService
{
    public interface IProductAttributeService
    {
        Task<List<ProductAttribute>> GetAllProductAttributes();
        Task<ProductAttribute?> GetProductAttribute(int id);
        Task<List<ProductAttribute>> AddProductAttribute(ProductAttribute productAttribute);
        Task<List<ProductAttribute>?> UpdateProductAttribute(int id, ProductAttribute request);
        Task<List<ProductAttribute>?> DeleteProductAttribute(int id);
    }
}
