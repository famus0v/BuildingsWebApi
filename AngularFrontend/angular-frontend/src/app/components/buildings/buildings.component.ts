import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GridModule, GridDataResult } from '@progress/kendo-angular-grid';
import { KENDO_DIALOGS } from '@progress/kendo-angular-dialog';
import { KENDO_BUTTONS } from "@progress/kendo-angular-buttons";
import { HttpClientModule } from '@angular/common/http';
import { BuildingService } from '../../services/buildings.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Building } from '../building.model';
import { BuildingModalComponent } from '../building-modal/building-modal.component';

@Component({
  selector: 'app-buildings',
  standalone: true,
  imports: [CommonModule, GridModule, HttpClientModule, KENDO_DIALOGS, KENDO_BUTTONS, ReactiveFormsModule, BuildingModalComponent],
  templateUrl: './buildings.component.html'
})
export class BuildingsComponent implements OnInit {
  createBuildingForm!: FormGroup;
  public gridView: GridDataResult = { data: [], total: 0 };

  constructor(private fb: FormBuilder, private buildingService: BuildingService) { }

  ngOnInit(): void {
    this.loadBuildings();
    this.createBuildingForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      floors: [0, Validators.required]
    });
  }


  showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  onBuildingSubmit(building: Building) {
    this.addBuilding(building);
    this.showModal = false;
  }

  public opened = false;

  public close(): void {
    this.opened = false;
  }

  public open(): void {
    this.opened = true;
  }

  loadBuildings(): void {
    this.buildingService.getBuildings().subscribe(data => {
      this.gridView = { data: data, total: data.length };
    });
  }

  addBuilding(building: any): void {
    this.buildingService.createBuilding(building).subscribe(() => {
      this.loadBuildings();
    });
  }

  updateBuilding(building: any): void {
    this.buildingService.updateBuilding(building).subscribe(() => {
      this.loadBuildings();
    });
  }

  deleteBuilding(id: number): void {
    this.buildingService.deleteBuilding(id).subscribe(() => {
      this.loadBuildings();
    });
  }
}