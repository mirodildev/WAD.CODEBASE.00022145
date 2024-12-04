using System.Collections.Generic;
using System.Threading.Tasks;

namespace WAD.CODEBASE._00022145.Repositories 
{
    public interface IRepository <T>
    {
        Task<IEnumerable<T>> GetAllAsync();
        Task<T> GetByIDAsync(int it);
        Task AddAsync(T entity);
        Task UpdateAsync(T entity);
        Task DeleteAsync(int id);
        
    }
}
