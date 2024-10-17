import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Building } from '../building.model'
import { KENDO_DIALOGS } from '@progress/kendo-angular-dialog';
import { KENDO_BUTTONS } from "@progress/kendo-angular-buttons";
import { KENDO_INPUTS, KENDO_NUMERICTEXTBOX } from '@progress/kendo-angular-inputs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-building-modal',
  templateUrl: './building-modal.component.html',
  standalone: true,
  styleUrls: ['./building-modal.component.css'],
  imports: [KENDO_DIALOGS, KENDO_BUTTONS, ReactiveFormsModule, KENDO_INPUTS, NgIf, KENDO_NUMERICTEXTBOX]
})
export class BuildingModalComponent {
  @Output() submitForm = new EventEmitter<Building>();
  @Output() close = new EventEmitter<void>();
  buildingForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.buildingForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      floors: [1, [Validators.required, Validators.min(1)]],
    });
  }

  onSubmit() {
    if (this.buildingForm.valid) {
      const newBuilding = new Building(
        this.buildingForm.value.name,
        this.buildingForm.value.address,
        this.buildingForm.value.floors
      );
      this.submitForm.emit(newBuilding);
      this.buildingForm.reset();
    }
  }

  closeDialog() {
    this.close.emit();
    this.buildingForm.reset();
  }
}