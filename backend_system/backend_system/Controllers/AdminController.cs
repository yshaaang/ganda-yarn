using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using backend_system.Models;

namespace backend_system.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
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

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<List<Admin>>> GetAllAdmins()
        {
            return Ok(admins);
        }

        [HttpGet("{id:int}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<Admin>> GetAdmin(int id)
        {
            var admin = admins.Find(x => x.ID == id);
            if(admin is null)
                return NotFound("Admin account doesn't exist.");

            return Ok(admin);
        }

        [HttpPost("id:int")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<List<Admin>>> AddAdmin([FromBody]Admin admin)
        {
            admins.Add(admin);
            return Ok(admins);
        }

        [HttpPut]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<List<Admin>>> UpdateAdmin(int id, [FromBody]Admin request)
        {
            var admin = admins.Find(x => x.ID == id);
            if(admin is null)
                return NotFound("Admin account doesn't exist.");

            admin.Username = request.Username;
            admin.Password = request.Password;
            admin.FirstName = request.FirstName;
            admin.LastName = request.LastName;
            admin.ModifiedAt = DateTime.Now;
            
            return Ok(admin);
        }

        [HttpDelete]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<List<Admin>>> DeleteAdmin(int id)
        {
            var admin = admins.Find(x => x.ID == id);
            if (admin is null)
                return NotFound("Admin account doesn't exist.");

            admins.Remove(admin);

            return Ok(admins);
        }
    }
}