using System.ComponentModel.DataAnnotations;

namespace SolidAppPlayground.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string NickName { get; set; }
    }
}
