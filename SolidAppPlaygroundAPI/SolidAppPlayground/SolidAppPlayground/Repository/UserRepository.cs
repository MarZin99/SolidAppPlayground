using Microsoft.EntityFrameworkCore;
using SolidAppPlayground.Data;
using SolidAppPlayground.Interfaces;
using SolidAppPlayground.Models;

namespace SolidAppPlayground.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly ApplicationDbContext _context;
        public UserRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<List<User>> GetAllAsync()
        {
            return await _context.Users.AsNoTracking().ToListAsync();
        }

        public async Task<User> CreateAsync(User user) 
        {
            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();
            return user;
        }

      
    }
}
