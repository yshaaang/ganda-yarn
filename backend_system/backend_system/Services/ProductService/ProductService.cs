using backend_system.Models;
using Microsoft.EntityFrameworkCore;

namespace backend_system.Services.ProductService
{
    public class ProductService : IProductService
    {
        private readonly GandaYarnDatabaseContext _context;

        public ProductService(GandaYarnDatabaseContext context)
        {
            _context = context;
        }

        public async Task<List<Product>> AddProduct(Product product)
        {
            _context.Products.Add(product);
            await _context.SaveChangesAsync();

            return await _context.Products.ToListAsync();
        }

        public async Task<List<Product>?> DeleteProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);
            if (product is null)
                return null;

            _context.Products.Remove(product);
            await _context.SaveChangesAsync();

            return await _context.Products.ToListAsync();
        }

        public async Task<List<Product>> GetAllProducts()
        {
            var products = await _context.Products.Include(product => product.ProductAttributes).ToListAsync();

            return products;
        }

        public async Task<Product?> GetProduct(int id)
        {
            var product = await _context.Products.Where(product => product.Id == id).Include(product => product.ProductAttributes).FirstOrDefaultAsync();
            if (product is null)
                return null;

            return product;
        }

        public async Task<List<Product>?> UpdateProduct(int id, Product request)
        {
            var product = await _context.Products.FindAsync(id);
            if (product is null)
                return null;

            product.Name = request.Name;
            product.Description = request.Description;
            product.PreviewImageLink = request.PreviewImageLink;
            product.QuantitySold = request.QuantitySold;
            product.ModifiedAt = DateTime.Now;

            await _context.SaveChangesAsync();

            return await _context.Products.ToListAsync();
        }
    }
}
