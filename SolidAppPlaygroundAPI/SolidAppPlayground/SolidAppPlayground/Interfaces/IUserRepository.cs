using Microsoft.AspNetCore.Mvc;
using SolidAppPlayground.Models;

namespace SolidAppPlayground.Interfaces
{
    public interface IUserRepository
    {
        Task<List<User>> GetAllAsync();

        Task<User> CreateAsync(User user);
    }
}
