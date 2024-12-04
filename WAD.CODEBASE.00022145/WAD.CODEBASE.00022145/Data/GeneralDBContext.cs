using Microsoft.EntityFrameworkCore;
using WAD.CODEBASE._00022145.Models;

namespace WAD.CODEBASE._00022145.Data
{
    public class GeneralDBContext : DbContext
    {
        public GeneralDBContext(DbContextOptions<GeneralDBContext> options) : base(options) { }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Event> Events { get; set; }

        
    }
}
