using Microsoft.EntityFrameworkCore;
using RoomsWebApi.DAL.Interfaces;
using RoomsWebApi.Domain.Models;

namespace RoomsWebApi.DAL.Repositories
{
    public class RoomRepository : IBaseRepository<Room>
    {
        private readonly ApplicationDbContext _db;

        public RoomRepository(ApplicationDbContext db)
        {
            _db = db;
        }

        public async Task Add(Room entity)
        {
            await _db.Rooms.AddAsync(entity);
            await _db.SaveChangesAsync();
        }

        public async Task Delete(int id)
        {
            var resource = await _db.Rooms.FindAsync(id);
            if (resource == null) return;
            _db.Rooms.Remove(resource);
            await _db.SaveChangesAsync();
        }

        public async Task DeleteRange(IEnumerable<Room> rooms)
        {
            _db.Rooms.RemoveRange(rooms);
            await _db.SaveChangesAsync();
        }

        public async Task<IEnumerable<Room>> GetAll()
        {
            var resource = await _db.Rooms.ToListAsync();
            return resource;
        }

        public async Task<Room?> GetById(int id)
        {
            var resource = await _db.Rooms.FindAsync(id);
            return resource;
        }

        public async Task<Room?> Update(Room entity)
        {
            var resource = await _db.Rooms.FindAsync(entity.Id);
            if (resource == null) return null;
            resource = entity;
            await _db.SaveChangesAsync();
            return resource;
        }
    }
}
