import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsModalComponent } from './rooms-modal.component';

describe('RoomsModalComponent', () => {
  let component: RoomsModalComponent;
  let fixture: ComponentFixture<RoomsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
