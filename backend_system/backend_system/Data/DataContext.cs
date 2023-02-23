global using Microsoft.EntityFrameworkCore;
using backend_system.Models;

namespace backend_system.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseSqlServer("Data Source=DESKTOP-MOPD89K\\SQLEXPRESS;Initial Catalog=ganda-yarn;Integrated Security=True;TrustServerCertificate=true;");
        }

        public DbSet<Admin> Admins { get; set; }
        public DbSet<Product> Products { get; set; }
    }
}
