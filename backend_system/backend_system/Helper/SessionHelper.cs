using backend_system.Models;
using Microsoft.EntityFrameworkCore;
using System.Net.NetworkInformation;

namespace backend_system.Helper
{
    public class SessionHelper
    {
        public static async Task<User?> GetUserFromSession(GandaYarnDatabaseContext context, string? session_id)
        {
            if (session_id == null) {
                return null;
            }

            var session = await context.Sessions.Where(session => session.Id == session_id).Include(session => session.User).FirstOrDefaultAsync();

            if (session == null)
            {
                return null;
            }

            return session.User;
        }
    }
}
