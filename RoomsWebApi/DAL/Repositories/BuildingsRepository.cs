using Microsoft.EntityFrameworkCore;
using RoomsWebApi.DAL.Interfaces;
using RoomsWebApi.Domain.Models;

namespace RoomsWebApi.DAL.Repositories
{
    public class BuildingsRepository : IBaseRepository<BuildingSummary>
    {
        private readonly ApplicationDbContext _db;

        public BuildingsRepository(ApplicationDbContext db)
        {
            _db = db;
        }

        public async Task Add(BuildingSummary entity)
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

        public async Task DeleteRange(IEnumerable<BuildingSummary> buildings)
        {
            _db.Buildings.RemoveRange(buildings);
            await _db.SaveChangesAsync();
        }

        public async Task<IEnumerable<BuildingSummary>> GetAll()
        {
            var resource = await _db.Buildings.ToListAsync();
            return resource;
        }

        public async Task<BuildingSummary?> GetById(int id)
        {
            var resource = await _db.Buildings.FindAsync(id);
            return resource;
        }

        public async Task<BuildingSummary?> Update(BuildingSummary entity)
        {
            var resource = await _db.Buildings.FindAsync(entity.Id);
            if (resource == null) return null;
            resource = entity;
            await _db.SaveChangesAsync();
            return resource;
        }
    }
}
