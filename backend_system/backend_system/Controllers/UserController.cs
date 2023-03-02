using backend_system.Models;
using backend_system.Services.UserService;
using Microsoft.AspNetCore.Mvc;

namespace backend_system.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<List<User>>> GetAllUsers()
        {
            return await _userService.GetAllUsers();
        }

        [HttpGet("{id:int}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<User>> GetUser(int id)
        {
            var result = await _userService.GetUser(id);
            if (result is null)
                return NotFound("User doesn't exist.");

            return Ok(result);
        }

        [HttpPost("{id:int}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<List<User>>> AddUser([FromBody] User user)
        {
            var result = await _userService.AddUser(user);

            return Ok(result);
        }

        [HttpPut]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<List<User>>> UpdateUser(int id, [FromBody] User request)
        {
            var result = await _userService.UpdateUser(id, request);
            if (result is null)
                return NotFound("User doesn't exist.");

            return Ok(result);
        }

        [HttpDelete("{id:int}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<List<User>>> DeleteUser(int id)
        {
            var result = await _userService.DeleteUser(id);
            if (result is null)
                return NotFound("User doesn't exist.");

            return Ok(result);
        }
    }
}
