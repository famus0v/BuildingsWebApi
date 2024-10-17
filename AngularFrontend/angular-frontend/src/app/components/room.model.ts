export class Room {
    constructor(
        public buildingId: number,
        public name: string,
        public type: number,
        public capacity: number,
        public floor: number,
        public number: number,
    ) { }
}