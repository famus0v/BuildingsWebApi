using BuildingsWebApi.Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace BuildingsWebApi.DAL
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
        {
        }

        public DbSet<Building> Buildings { get; set; } = null!;

    }
}
