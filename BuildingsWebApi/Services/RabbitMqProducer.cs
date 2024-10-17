using BuildingsWebApi.Domain.Models;
using Newtonsoft.Json;
using RabbitMQ.Client;
using System.Text;

public class RabbitMqProducer
{
    private readonly IConnection _connection;
    private readonly IModel _channel;

    public RabbitMqProducer()
    {
        var factory = new ConnectionFactory() {
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
    }

    public void SendMessage(int buildingId, string action, Building? building = null)
    {
        var message = JsonConvert.SerializeObject(
        new {   
            BuildingId = buildingId,
            Action = action,
            Summary = building == null ? null : new { building?.Id, building?.Name }
        });

        var body = Encoding.UTF8.GetBytes(message);

        _channel.BasicPublish(exchange: "",
                                routingKey: "BuildingQueue",
                                basicProperties: null,
                                body: body);
    }
}

