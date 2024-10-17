using Microsoft.EntityFrameworkCore;
using RoomsWebApi.Domain.Models;

namespace RoomsWebApi.DAL
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
        {
        }

        public DbSet<Room> Rooms { get; set; } = null!;
        public DbSet<BuildingSummary> Buildings { get; set; } = null!;

    }
}
