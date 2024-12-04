using Microsoft.EntityFrameworkCore;
using WAD.CODEBASE._00022145.Data;
using WAD.CODEBASE._00022145.Models;

namespace WAD.CODEBASE._00022145.Repositories
{
    public class EventRepository : IRepository<Event>
    {
        private readonly GeneralDBContext _context;

        public EventRepository(GeneralDBContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Event>> GetAllAsync() => await _context.Events.ToArrayAsync();

        public async Task<Event> GetByIDAsync(int id)
        {
            return await _context.Events.Include(t=>t.Category).FirstOrDefaultAsync(t=>t.ID==id);
        }

        public async Task AddAsync(Event entity)
        {
            entity.Category = await _context.Categories.FindAsync(entity.CategoryID.Value);

            await _context.Events.AddAsync(entity);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(Event entity)
        {
            _context.Entry(entity).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var entity = await _context.Events.FindAsync(id);
            if (entity != null)
            {
                _context.Events.Remove(entity);
                await _context.SaveChangesAsync();
            }
        }
    }
}
