using Microsoft.CodeAnalysis.CSharp.Syntax;
using SolidAppPlayground.Dtos.User;
using SolidAppPlayground.Models;

namespace SolidAppPlayground.Mappers
{
    public static class UserMappers
    {
        public static UserDto ToUserDto(this User user)
        {
            return new UserDto
            {
                Id = user.Id,
                Name = user.Name,
                NickName = user.NickName,

            };
        }
    }
}
