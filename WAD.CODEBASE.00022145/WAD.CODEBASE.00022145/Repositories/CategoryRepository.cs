using Microsoft.EntityFrameworkCore;
using WAD.CODEBASE._00022145.Data;
using WAD.CODEBASE._00022145.Models;

namespace WAD.CODEBASE._00022145.Repositories
{
    public class CategoryRepository : IRepository<Category>
    {
        private readonly GeneralDBContext _context;

        public CategoryRepository(GeneralDBContext context)
        {
            _context = context;
        }

        public async Task AddAsync(Category categories)
        {
            await _context.Categories.AddAsync(categories);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var entity = await _context.Categories.FindAsync(id);
            if (entity != null)
            {
                _context.Categories.Remove(entity);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<IEnumerable<Category>> GetAllAsync() => await _context.Categories.ToArrayAsync();

        public async Task<Category> GetByIDAsync(int id) => await _context.Categories.FindAsync(id);

        public async Task UpdateAsync(Category categories)
        {
            _context.Entry(categories).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }
    }
}
