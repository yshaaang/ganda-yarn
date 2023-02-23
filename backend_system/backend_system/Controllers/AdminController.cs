using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using backend_system.Models;
using backend_system.Services.ProductService;

namespace backend_system.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly IAdminService _adminService;

        public AdminController(IAdminService adminService)
        {
            _adminService = adminService;
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<List<Admin>>> GetAllAdmins()
        {
            return await _adminService.GetAllAdmins();
        }

        [HttpGet("{id:int}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<Admin>> GetAdmin(int id)
        {
            var result = await _adminService.GetAdmin(id);
            if (result is null)
                return NotFound("Admin doesn't exist.");

            return Ok(result);
        }

        [HttpPost("id:int")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<List<Admin>>> AddAdmin([FromBody]Admin admin)
        {
            var result = await _adminService.AddAdmin(admin);

            return Ok(result);
        }

        [HttpPut]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<List<Admin>>> UpdateAdmin(int id, [FromBody]Admin request)
        {
            var result = await _adminService.UpdateAdmin(id, request);
            if (result is null)
                return NotFound("Admin doesn't exist.");

            return Ok(result);
        }

        [HttpDelete]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<List<Admin>>> DeleteAdmin(int id)
        {
            var result = await _adminService.DeleteAdmin(id);
            if (result is null)
                return NotFound("Admin doesn't exist.");

            return Ok(result);
        }
    }
}