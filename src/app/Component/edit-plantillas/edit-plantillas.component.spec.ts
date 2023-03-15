import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPlantillasComponent } from './edit-plantillas.component';

describe('EditPlantillasComponent', () => {
  let component: EditPlantillasComponent;
  let fixture: ComponentFixture<EditPlantillasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPlantillasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPlantillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
