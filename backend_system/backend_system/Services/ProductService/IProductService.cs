﻿using backend_system.Models;

namespace backend_system.Services.ProductService
{
    public interface IProductService
    {
        Task<List<Product>> GetAllProducts();
        Task<Product?> GetProduct(int id);
        Task<List<Product>> AddProduct(Product product);
        Task<List<Product>?> UpdateProduct(int id, Product request);
        Task<List<Product>?> DeleteProduct(int id);
    }
}
