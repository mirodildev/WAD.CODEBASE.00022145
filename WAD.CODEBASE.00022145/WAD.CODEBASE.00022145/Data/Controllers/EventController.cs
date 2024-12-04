using Microsoft.AspNetCore.Mvc;
using WAD.CODEBASE._00022145.Models;
using WAD.CODEBASE._00022145.Repositories;

namespace WAD.CODEBASE._00022145.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class EventController : ControllerBase
    {





        private readonly IRepository<Event> _eventRepository;
        public EventController(IRepository<Event> eventRepository)
        {
            _eventRepository = eventRepository;
        }









    
        [HttpGet]
        public async Task<IEnumerable<Event>> GetAll() => await _eventRepository.GetAllAsync();














        [HttpGet("{id}")]
        [ProducesResponseType(typeof(Event), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetByID(int id)
        {
            var resultedEvent = await _eventRepository.GetByIDAsync(id);
            return resultedEvent == null ? NotFound() : Ok(resultedEvent);
        }
















        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public async Task<IActionResult> Create(Event items)
        {
            await _eventRepository.AddAsync(items);
            return Ok(items);
        }













        [HttpPut]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> Update(Event items) 
        {
            await _eventRepository.UpdateAsync(items);
            return NoContent();
        }












        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> Delete(int id)
        {
            await _eventRepository.DeleteAsync(id);
            return NoContent(); 


        }



    }
}
