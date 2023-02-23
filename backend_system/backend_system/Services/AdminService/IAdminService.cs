using backend_system.Models;
using Microsoft.AspNetCore.Mvc;

namespace backend_system.Services.AdminService
{
    public interface IAdminService
    {
        Task<List<Admin>> GetAllAdmins();
        Task<Admin?> GetAdmin(int id);
        Task<List<Admin>> AddAdmin(Admin admin);
        Task<List<Admin>?> UpdateAdmin(int id, Admin request);
        Task<List<Admin>?> DeleteAdmin(int id);
    }
}
