using Microsoft.EntityFrameworkCore;
using RabbitMQ.Client;
using RoomsWebApi.DAL;
using RoomsWebApi.DAL.Interfaces;
using RoomsWebApi.DAL.Repositories;
using RoomsWebApi.Domain.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<IBaseRepository<Room>, RoomRepository>();
builder.Services.AddScoped<IBaseRepository<BuildingSummary>, BuildingsRepository>();

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin", builder =>
    {
        builder
            .WithOrigins("http://localhost:4200")
            .WithOrigins("https://localhost:4200")
            .WithOrigins(["https://angular-app:4200", "https://angular-app:4200"])
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials();
    });
});

builder.Services.AddHostedService<RabbitMqConsumerService>();

var app = builder.Build();

using (var serviceScope = app.Services.CreateScope())
{
    var dbContext = serviceScope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
    dbContext.Database.Migrate();
}

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowSpecificOrigin");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
