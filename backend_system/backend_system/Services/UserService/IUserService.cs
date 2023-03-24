using backend_system.Models;
using static backend_system.Services.UserService.UserService;

namespace backend_system.Services.UserService
{
    public interface IUserService
    {
        Task<List<User>> GetAllUsers();
        Task<Session> GetLogin(string username, string password);
        Task<User?> GetUser(int id);
        Task<Session?> AddUser(UserInput request);
        Task<List<User>?> UpdateUser(int id, User request);
        Task<List<User>?> DeleteUser(int id);
    }
}
