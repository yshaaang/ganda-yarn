using backend_system.Models;
using Microsoft.EntityFrameworkCore;

namespace backend_system.Services.UserService
{
    public class UserService : IUserService
    {
        private readonly GandaYarnDatabaseContext _context;

        public UserService(GandaYarnDatabaseContext context)
        {
            _context = context;
        }

        public async Task<List<User>> AddUser(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return await _context.Users.ToListAsync();
        }

        public async Task<List<User>?> DeleteUser(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user is null)
                return null;

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return await _context.Users.ToListAsync();
        }

        public async Task<List<User>> GetAllUsers()
        {
            var users = await _context.Users.ToListAsync();

            return users;
        }

        public async Task<User?> GetUser(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user is null)
                return null;

            return user;
        }

        public async Task<List<User>?> UpdateUser(int id, User request)
        {
            var user = await _context.Users.FindAsync(id);
            if (user is null)
                return null;

            user.Id = request.Id;
            user.Username = request.Username;
            user.Password = request.Password;
            user.FirstName = request.FirstName;
            user.LastName = request.LastName;
            user.Gender = request.Gender;
            user.MobileNumber = request.MobileNumber;
            user.HomeAddress = request.HomeAddress;
            user.EmailAddress = request.EmailAddress;
            user.ModifiedAt = DateTime.Now;

            await _context.SaveChangesAsync();

            return await _context.Users.ToListAsync();
        }
    }
}
