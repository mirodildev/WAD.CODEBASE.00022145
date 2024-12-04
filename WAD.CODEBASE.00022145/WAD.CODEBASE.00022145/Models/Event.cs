// Event.cs
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using WAD.CODEBASE._00022145.Models;

namespace WAD.CODEBASE._00022145.Models
{
    public class Event
    {
        [Required]
        public int ID { get; set; }

        [Required(ErrorMessage = "Event Name is required")]
        public string? Name { get; set; }

        [Required(ErrorMessage = "Event Description is required")]
        public string? Description { get; set; }

        public int? CategoryID { get; set; }

        [ForeignKey("CategoryID")]
        public Category? Category { get; set; }

        [Required(ErrorMessage = "Event Location is required")]
        public string? Location { get; set; }
    }
}
