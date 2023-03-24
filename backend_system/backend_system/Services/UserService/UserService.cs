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

        public async Task<Session?> AddUser(UserInput request)
        {
            var existingUsername = await _context.Users.Where(existing => existing.Username == request.Username).FirstOrDefaultAsync();

            if (existingUsername != null)
            {
                return null;
            }

            var user = new User()
            {
                Id = Guid.NewGuid().ToString(),
                FirstName = request.FirstName,
                LastName = request.LastName,
                Gender = request.Gender,
                MobileNumber = request.MobileNumber,
                HomeAddress = request.HomeAddress,
                EmailAddress = request.EmailAddress,
                Username = request.Username,
                Password = request.Password,
                CreatedAt = DateTime.UtcNow,
            };

            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();

            var session = new Session()
            {
                Id = Guid.NewGuid().ToString(),
                User = user,
                UserId = user.Id
            };

            await _context.Sessions.AddAsync(session);
            await _context.SaveChangesAsync();

            return session;
        }

        public async Task<Session> GetLogin(string username, string password)
        {
            var user = await _context.Users
                .Where(user => user.Username == username && user.Password == password)
                .Include(user => user.Session)
                .FirstOrDefaultAsync();

            if (user == null)
            {
                return null;
            }

            if (user.Session != null) {
                Console.WriteLine(user.Session.Id);
                //await _context.Sessions.Where(session => session.Id == user.Session.Id).ExecuteDeleteAsync();
            }
            await _context.SaveChangesAsync();

            var session = new Session()
            {
                Id = Guid.NewGuid().ToString(),
                User = user,
                UserId = user.Id
            };

            await _context.Sessions.AddAsync(session);
            await _context.SaveChangesAsync();

            return session;
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

        public class UserInput
        {
            public string FirstName { get; set; }

            public string LastName { get; set; }

            public string Gender { get; set; }

            public string MobileNumber { get; set; }
            public string HomeAddress { get; set; }
            public string EmailAddress { get; set; }
            public string Username { get; set; }
            public string Password { get; set; }
        }
    }
}
