using backend_system.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend_system.Services.ProductAttributeService
{
    public class ProductAttributeService : IProductAttributeService
    {
        private readonly GandaYarnDatabaseContext _context;

        public ProductAttributeService(GandaYarnDatabaseContext context)
        {
            _context = context;
        }

        public async Task<List<ProductAttribute>> AddProductAttribute(ProductAttribute productAttribute)
        {
            _context.ProductAttributes.Add(productAttribute);
            await _context.SaveChangesAsync();

            return await _context.ProductAttributes.ToListAsync();
        }

        public async Task<List<ProductAttribute>?> DeleteProductAttribute(int id)
        {
            var productAttribute = await _context.ProductAttributes.FindAsync(id);
            if (productAttribute is null)
                return null;

            _context.ProductAttributes.Remove(productAttribute);
            await _context.SaveChangesAsync();

            return await _context.ProductAttributes.ToListAsync();
        }

        public async Task<List<ProductAttribute>> GetAllProductAttributes()
        {
            var productAttributes = await _context.ProductAttributes.ToListAsync();

            return productAttributes;
        }

        public async Task<ProductAttribute?> GetProductAttribute(int id)
        {
            var productAttribute = await _context.ProductAttributes.FindAsync(id);
            if (productAttribute is null)
                return null;

            return productAttribute;
        }

        public async Task<List<ProductAttribute>?> UpdateProductAttribute(int id, ProductAttribute request)
        {
            var productAttribute = await _context.ProductAttributes.FindAsync(id);
            if (productAttribute is null)
                return null;

            productAttribute.ProductId = request.ProductId;
            productAttribute.Variant = request.Variant;
            productAttribute.ImageLink = request.ImageLink;
            productAttribute.ModifiedAt = DateTime.Now;

            await _context.SaveChangesAsync();

            return await _context.ProductAttributes.ToListAsync();
        }
    }
}
