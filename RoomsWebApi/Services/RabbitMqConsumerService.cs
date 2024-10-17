using RabbitMQ.Client;
using RabbitMQ.Client.Events;
using System.Text;
using System.Text.Json;
using RoomsWebApi.Domain.Models;
using RoomsWebApi.DAL.Interfaces;

public class RabbitMqConsumerService : BackgroundService
{
    private readonly IServiceProvider _serviceProvider;
    private readonly IConnection _connection;
    private readonly IModel _channel;

    public RabbitMqConsumerService(IServiceProvider serviceProvider)
    {
        var factory = new ConnectionFactory()
        {
            HostName = "rabbitmq",
            UserName = "user",
            Password = "password"
        };
        _connection = factory.CreateConnection();
        _channel = _connection.CreateModel();

        _channel.QueueDeclare(queue: "BuildingQueue",
                             durable: false,
                             exclusive: false,
                             autoDelete: false,
                             arguments: null);

        _serviceProvider = serviceProvider;
    }

    protected override Task ExecuteAsync(CancellationToken stoppingToken)
    {

        var consumer = new EventingBasicConsumer(_channel);

        consumer.Received += async (model, ea) =>
        {
            var body = ea.Body.ToArray();
            var message = Encoding.UTF8.GetString(body);
            var buildingEvent = JsonSerializer.Deserialize<BuildingEvent>(message);

            if (buildingEvent?.Action == "Delete")
            {
                await HandleBuildingDeleted(buildingEvent.BuildingId);
            }

            if(buildingEvent?.Action == "Create")
            {
                await HandleBuildingCreate(buildingEvent.Summary);
            }
        };

        _channel.BasicConsume(queue: "BuildingQueue",
                              autoAck: true,
                              consumer: consumer);

        return Task.CompletedTask;
    }

    private async Task HandleBuildingDeleted(int buildingId)
    {
        using (var scope = _serviceProvider.CreateScope())
        {
            var roomRepository = scope.ServiceProvider.GetRequiredService<IBaseRepository<Room>>();
            var buildingRepository = scope.ServiceProvider.GetRequiredService<IBaseRepository<BuildingSummary>>();

            var rooms = await roomRepository.GetAll();
            rooms = rooms.Where(r => r.BuildingId == buildingId).ToList();

            await roomRepository.DeleteRange(rooms);
            await buildingRepository.Delete(buildingId);
        }
    }

    private async Task HandleBuildingCreate(BuildingSummary entity)
    {
        using (var scope = _serviceProvider.CreateScope())
        {
            var buildingRepository = scope.ServiceProvider.GetRequiredService<IBaseRepository<BuildingSummary>>();
            await buildingRepository.Add(entity);
        }
    }

    private async Task HandleBuildingUpdate(BuildingSummary entity)
    {
        using (var scope = _serviceProvider.CreateScope())
        {
            var buildingRepository = scope.ServiceProvider.GetRequiredService<IBaseRepository<BuildingSummary>>();
            await buildingRepository.Update(entity);
        }
    }
}

public class BuildingEvent
{
    public int BuildingId { get; set; }
    public string Action { get; set; } = null!; // Create, Update, Delete (можно было enum сделать, но мне оч лень;D )
    public BuildingSummary? Summary { get; set; }
}