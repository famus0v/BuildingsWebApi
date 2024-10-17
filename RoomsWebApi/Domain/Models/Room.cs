using RoomsWebApi.Domain.Enums;

namespace RoomsWebApi.Domain.Models
{
    public class Room
    {
        public int Id { get; set; }
        public int BuildingId {  get; set; }
        public string Name {  get; set; }
        public RoomType Type { get; set; }
        public int Capacity {  get; set; }
        public int Floor {  get; set; }
        public int Number {  get; set; }
    }
}
