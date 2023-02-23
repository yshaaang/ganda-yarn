using backend_system.Data;
using backend_system.Models;

namespace backend_system.Services.AdminService
{
    public class AdminService : IAdminService
    {
        private readonly DataContext _context;

        public AdminService(DataContext context)
        {
            _context = context;
        }

        public async Task<List<Admin>> AddAdmin(Admin admin)
        {
            _context.Admins.Add(admin);
            await _context.SaveChangesAsync();

            return await _context.Admins.ToListAsync();
        }

        public async Task<List<Admin>?> DeleteAdmin(int id)
        {
            var admin = await _context.Admins.FindAsync(id);
            if (admin is null)
                return null;

            _context.Admins.Remove(admin);
            await _context.SaveChangesAsync();

            return await _context.Admins.ToListAsync();
        }

        public async Task<Admin?> GetAdmin(int id)
        {
            var admin = await _context.Admins.FindAsync(id);
            if (admin is null)
                return null;

            return admin;
        }

        public async Task<List<Admin>> GetAllAdmins()
        {
            var admins = await _context.Admins.ToListAsync();

            return admins;
        }

        public async Task<List<Admin>?> UpdateAdmin(int id, Admin request)
        {
            var admin = await _context.Admins.FindAsync(id);
            if (admin is null)
                return null;

            admin.Username = request.Username;
            admin.Password = request.Password;
            admin.FirstName = request.FirstName;
            admin.LastName = request.LastName;
            admin.ModifiedAt = DateTime.Now;

            await _context.SaveChangesAsync();

            return await _context.Admins.ToListAsync();
        }
    }
}
