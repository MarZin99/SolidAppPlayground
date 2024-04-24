using Microsoft.AspNetCore.Mvc;
using SolidAppPlayground.Models;

namespace SolidAppPlayground.Interfaces
{
    public interface IUserRepository
    {
        Task<List<User>> GetAllAsync();
        Task<User> CreateAsync(User user);

        IQueryable<User> ById(int id);
        IQueryable<User> ByNickname(string nickname);

    }
}
