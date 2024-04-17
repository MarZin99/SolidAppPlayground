using Microsoft.EntityFrameworkCore;
using SolidAppPlayground.Models;

namespace SolidAppPlayground.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        { 
            Database.EnsureCreated();
        }

        public DbSet<User> Users => Set<User>();
    }
}
