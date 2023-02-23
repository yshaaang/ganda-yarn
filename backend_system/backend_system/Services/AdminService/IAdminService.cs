using backend_system.Models;
using Microsoft.AspNetCore.Mvc;

namespace backend_system.Services.AdminService
{
    public interface IAdminService
    {
        List<Admin> GetAllAdmins();
        Admin? GetAdmin(int id);
        List<Admin> AddAdmin(Admin admin);
        List<Admin>? UpdateAdmin(int id, Admin request);
        List<Admin>? DeleteAdmin(int id);
    }
}
