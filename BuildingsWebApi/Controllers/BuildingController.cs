using BuildingsWebApi.DAL.Interfaces;
using BuildingsWebApi.Domain.Models;
using Microsoft.AspNetCore.Mvc;

namespace BuildingsWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BuildingController : ControllerBase
    {
        private readonly IBaseRepository<Building> _buildingRepository;
        private readonly RabbitMqProducer _rabbitMqProducer;

        public BuildingController(IBaseRepository<Building> buildingRepository, RabbitMqProducer rabbitMqProducer)
        {
            _buildingRepository = buildingRepository;
            _rabbitMqProducer = rabbitMqProducer;
        }

        [HttpGet]
        public async Task<IEnumerable<Building>> Get()
        {
            return await _buildingRepository.GetAll();
        }

        [HttpGet("{id}")]
        public async Task<Building?> Get(int id)
        {
            return await _buildingRepository.GetById(id);
        }

        [HttpPost]
        public async Task Post(Building entity)
        {
            await _buildingRepository.Add(entity);
            _rabbitMqProducer.SendMessage(entity.Id, "Create", entity);
        }

        [HttpPut]
        public async Task Put(Building entity)
        {
            await _buildingRepository.Update(entity);
            _rabbitMqProducer.SendMessage(entity.Id, "Update", entity);
        }

        [HttpDelete("{id}")]
        public async Task Delete(int id)
        {
            await _buildingRepository.Delete(id);
            _rabbitMqProducer.SendMessage(id, "Delete");
        }
    }
}
