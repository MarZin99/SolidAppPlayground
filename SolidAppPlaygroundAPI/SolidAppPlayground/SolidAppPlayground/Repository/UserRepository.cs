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
            using (var dbContextTransaction = _context.Database.BeginTransaction())
            {
                try
                {
                    if (this.ById(user.Id).FirstOrDefault() != null) throw new Exception("User already exist");
                    if (this.ByNickname(user.NickName).FirstOrDefault() != null) throw new Exception($"User with nickname {user.NickName} already exist");
                    await _context.Users.AddAsync(user);
                        await _context.SaveChangesAsync();
                        dbContextTransaction.Commit();
                        return user;
                    
                }
                catch (Exception ex)
                {
                    return user;
                }
            }
        }

        public IQueryable<User> ById(int id)
        {
            var query = _context.Users.Where(u => u.Id == id);
            return query;
        }

        public IQueryable<User> ByNickname(string nickname)
        {
            var query = _context.Users.Where(u => u.NickName == nickname);
            return query;
        }
    }
}
