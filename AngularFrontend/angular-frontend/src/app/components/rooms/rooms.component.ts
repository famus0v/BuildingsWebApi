import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule, GridDataResult } from '@progress/kendo-angular-grid';
import { HttpClientModule } from '@angular/common/http';
import { RoomService } from '../../services/rooms.service';
import { Room } from '../room.model';
import { RoomsModalComponent } from "../rooms-modal/rooms-modal.component";
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { KENDO_DIALOG } from '@progress/kendo-angular-dialog';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-auditoriums',
  standalone: true,
  imports: [CommonModule, GridModule, HttpClientModule, RoomsModalComponent, KENDO_BUTTONS, KENDO_DIALOG],  // Импортируем Kendo Grid
  templateUrl: './rooms.component.html'
})
export class RoomsComponent implements OnInit {
  public gridView: GridDataResult = { data: [], total: 0 };
  buildingSummary: any[] | undefined;

  roomTypes: any[] = [
    { name: "Лекционная", id: 0 },
    { name: "Для практических занятий", id: 1 },
    { name: "Спотривный зал", id: 2 }
  ];

  constructor(private roomService: RoomService) { }

  showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  onBuildingSubmit(building: Room) {
    this.addAuditorium(building);
    this.showModal = false;
  }

  ngOnInit(): void {
    this.loadBuildings();
    this.loadAuditoriums();
  }

  loadBuildings(): void {
    this.roomService.getBuildingsSummary().subscribe(data => {
      this.buildingSummary = data;
    });
  }

  loadAuditoriums(): void {
    this.roomService.getAuditoriums().subscribe(data => {
      const buildingMap = this.buildingSummary?.reduce((map, building) => {
        map[building.id] = building.name;
        return map;
      }, {});

      const roomTypeMap = this.roomTypes.reduce((map, roomType) => {
        map[roomType.id] = roomType.name;
        return map;
      }, {});

      const updatedData = data.map(auditorium => ({
        ...auditorium,
        buildingName: buildingMap[auditorium.buildingId] || null, // если buildingId не найден, ставим null
        type: roomTypeMap[auditorium.type] || 'Unknown' // заменяем type на название, если type не найден, ставим 'Unknown'
      }));

      this.gridView = { data: updatedData, total: updatedData.length };
    });
  }

  addAuditorium(auditorium: any): void {
    this.roomService.createAuditorium(auditorium).subscribe(() => {
      this.loadAuditoriums();
    });
  }

  updateAuditorium(auditorium: any): void {
    this.roomService.updateAuditorium(auditorium).subscribe(() => {
      this.loadAuditoriums();
    });
  }

  deleteAuditorium(id: number): void {
    this.roomService.deleteAuditorium(id).subscribe(() => {
      this.loadAuditoriums();
    });
  }
}