using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using SolidAppPlayground.Data;
using SolidAppPlayground.Dtos.User;
using SolidAppPlayground.Interfaces;
using SolidAppPlayground.Mappers;
using SolidAppPlayground.Models;
using SolidAppPlayground.Repository;
using SQLitePCL;

namespace SolidAppPlayground.Controllers
{
    [Route("api/user")]
    [ApiController]
    public class UsersController : ControllerBase
    {

        private readonly IUserRepository _userRepository;
        private readonly ApplicationDbContext _context;

        public UsersController(IUserRepository userRepository, ApplicationDbContext context)
        {
            _userRepository = userRepository;
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<UserDto>>> GetAll()
        {
            var users = await _userRepository.GetAllAsync();

            var dupa = users;
            var usersDto = users.Select(x => x.ToUserDto()).ToList();

            return usersDto;
        }

        [HttpPut]
        public async Task<ActionResult<List<User>>> AddUser(User newUser)
        {
            if(newUser != null)
            {
                await _context.Users.AddAsync(newUser);
                await _context.SaveChangesAsync();
                return Ok(await _userRepository.GetAllAsync());

            }

            return BadRequest("Object instance not set 12");
        }


    }
}
