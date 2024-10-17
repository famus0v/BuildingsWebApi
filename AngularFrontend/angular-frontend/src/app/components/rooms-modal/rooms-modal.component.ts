import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Room } from '../room.model'
import { KENDO_DIALOGS } from '@progress/kendo-angular-dialog';
import { KENDO_BUTTONS } from "@progress/kendo-angular-buttons";
import { KENDO_INPUTS, KENDO_NUMERICTEXTBOX } from '@progress/kendo-angular-inputs';
import { NgIf } from '@angular/common';
import { RoomService } from '../../services/rooms.service';
import { KENDO_DROPDOWNLIST } from '@progress/kendo-angular-dropdowns';


@Component({
  selector: 'app-rooms-modal',
  standalone: true,
  imports: [KENDO_DIALOGS, KENDO_BUTTONS, ReactiveFormsModule, KENDO_INPUTS, NgIf, KENDO_NUMERICTEXTBOX, KENDO_DROPDOWNLIST,],
  templateUrl: './rooms-modal.component.html',
  styleUrl: './rooms-modal.component.css'
})
export class RoomsModalComponent {
  @Output() submitForm = new EventEmitter<Room>();
  @Output() close = new EventEmitter<void>();

  roomForm: FormGroup;

  buildingSummary: any[] | undefined;

  constructor(private fb: FormBuilder, private roomService: RoomService) {
    this.roomForm = this.fb.group({
      buildingId: [null, [Validators.required, Validators.min(1)]],
      name: ['', Validators.required],
      type: [0, [Validators.required, Validators.min(0), Validators.max(4)]],
      capacity: [1, [Validators.required, Validators.min(1)]],
      floor: [1, [Validators.required, Validators.min(1)]],
      number: [1, [Validators.required]],
    });
  }

  loadBuildings(): void {
    this.roomService.getBuildingsSummary().subscribe(data => {
      this.buildingSummary = data;
    });
  }

  ngOnInit(): void {
    this.loadBuildings();
  }

  roomTypes = [
    {
      name: "Lecture",
      id: 0
    },
    {
      name: "Practical",
      id: 1
    },
    {
      name: "Gym",
      id: 2
    }
  ]

  onSubmit() {
    if (this.roomForm.valid) {
      console.log(this.roomForm.value);
      const newBuilding = new Room(
        this.roomForm.value.buildingId,
        this.roomForm.value.name,
        this.roomForm.value.type,
        this.roomForm.value.capacity,
        this.roomForm.value.floor,
        this.roomForm.value.number
      );
      this.submitForm.emit(newBuilding);
      this.roomForm.reset();
    }
  }
  closeDialog() {
    this.close.emit();
    this.roomForm.reset();
  }
}
