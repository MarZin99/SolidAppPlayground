using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SolidAppPlayground.Data;
using SolidAppPlayground.Interfaces;
using SolidAppPlayground.Models;
using SQLitePCL;

namespace SolidAppPlayground.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly ApplicationDbContext _context;
        public UserRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public Task<List<User>> GetAllAsync()
        {
            return _context.Users.ToListAsync();
        }

      
    }
}
