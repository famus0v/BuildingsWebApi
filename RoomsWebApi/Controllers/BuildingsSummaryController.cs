using Microsoft.AspNetCore.Mvc;
using RoomsWebApi.DAL.Interfaces;
using RoomsWebApi.DAL.Repositories;
using RoomsWebApi.Domain.Models;

namespace RoomsWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BuildingsSummaryController : ControllerBase
    {
        private readonly IBaseRepository<BuildingSummary> _buildingsRepository;

        public BuildingsSummaryController(IBaseRepository<BuildingSummary> buildingsRepository)
        {
            _buildingsRepository = buildingsRepository;
        }

        [HttpGet]
        public async Task<IEnumerable<BuildingSummary>> Get()
        {
            return await _buildingsRepository.GetAll();
        }

        [HttpGet("{id}")]
        public async Task<BuildingSummary?> Get(int id)
        {
            return await _buildingsRepository.GetById(id);
        }

        [HttpPost]
        public async Task Post(BuildingSummary entity)
        {
            await _buildingsRepository.Add(entity);
        }

        [HttpPut]
        public async void Put(BuildingSummary entity)
        {
            await _buildingsRepository.Update(entity);
        }

        [HttpDelete("{id}")]
        public async Task Delete(int id)
        {
            await _buildingsRepository.Delete(id);
        }
    }
}
