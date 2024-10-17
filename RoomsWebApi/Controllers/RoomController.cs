using Microsoft.AspNetCore.Mvc;
using RoomsWebApi.DAL.Interfaces;
using RoomsWebApi.Domain.Models;

namespace RoomsWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoomController : ControllerBase
    {
        private readonly IBaseRepository<Room> _roomRepository;

        public RoomController(IBaseRepository<Room> roomRepository)
        {
            _roomRepository = roomRepository;
        }

        [HttpGet]
        public async Task<IEnumerable<Room>> Get()
        {
            return await _roomRepository.GetAll();
        }

        [HttpGet("{id}")]
        public async Task<Room?> Get(int id)
        {
            return await _roomRepository.GetById(id);
        }

        [HttpPost]
        public async Task Post(Room entity)
        {
            await _roomRepository.Add(entity);
        }

        [HttpPut]
        public async Task Put(Room entity)
        {
            await _roomRepository.Update(entity);
        }

        [HttpDelete("{id}")]
        public async Task Delete(int id)
        {
            await _roomRepository.Delete(id);
        }
    }
}
