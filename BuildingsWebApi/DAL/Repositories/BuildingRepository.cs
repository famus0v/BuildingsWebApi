using BuildingsWebApi.DAL.Interfaces;
using BuildingsWebApi.Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace BuildingsWebApi.DAL.Repositories
{
    public class BuildingRepository : IBaseRepository<Building>
    {
        private readonly ApplicationDbContext _db;

        public BuildingRepository(ApplicationDbContext db)
        {
            _db = db;
        }

        public async Task Add(Building entity)
        {
            await _db.Buildings.AddAsync(entity);
            await _db.SaveChangesAsync();
        }

        public async Task Delete(int id)
        {
            var resource = await _db.Buildings.FindAsync(id);
            if (resource == null) return;
            _db.Buildings.Remove(resource);
            await _db.SaveChangesAsync();
        }

        public async Task<IEnumerable<Building>> GetAll()
        {
            var resource = await _db.Buildings.ToListAsync();
            return resource;
        }

        public async Task<Building?> GetById(int id)
        {
            var resource = await _db.Buildings.FindAsync(id);
            return resource;
        }

        public async Task<Building?> Update(Building entity)
        {
            var resource = await _db.Buildings.FindAsync(entity.Id);
            if (resource == null) return null;
            resource = entity;
            await _db.SaveChangesAsync();
            return resource;
        }
    }
}
