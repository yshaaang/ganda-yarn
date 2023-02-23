using backend_system.Models;

namespace backend_system.Services.AdminService
{
    public class AdminService : IAdminService
    {
        private static List<Admin> admins = new List<Admin>
        {
            new Admin
            {
                ID = 1,
                Username = "admin",
                Password = "thisisreallyauniquepassword",
                FirstName = "Christian Roed",
                LastName = "Boyles",
                CreatedAt = DateTime.Now,
                ModifiedAt = null
            },
            new Admin
            {
                ID = 2,
                Username = "chrstnrdbyls",
                Password = "GNDYRNpakmamsh",
                FirstName = "Hanni",
                LastName = "Pham",
                CreatedAt = DateTime.Now,
                ModifiedAt = null
            }
        };

        public List<Admin> AddAdmin(Admin admin)
        {
            admins.Add(admin);
            return admins;
        }

        public List<Admin>? DeleteAdmin(int id)
        {
            var admin = admins.Find(x => x.ID == id);
            if (admin is null)
                return null;

            admins.Remove(admin);

            return admins;
        }

        public Admin? GetAdmin(int id)
        {
            var admin = admins.Find(x => x.ID == id);
            if (admin is null)
                return null;

            return admin;
        }

        public List<Admin> GetAllAdmins()
        {
            return admins;
        }

        public List<Admin>? UpdateAdmin(int id, Admin request)
        {
            var admin = admins.Find(x => x.ID == id);
            if (admin is null)
                return null;

            admin.Username = request.Username;
            admin.Password = request.Password;
            admin.FirstName = request.FirstName;
            admin.LastName = request.LastName;
            admin.ModifiedAt = DateTime.Now;

            return admins;
        }
    }
}
