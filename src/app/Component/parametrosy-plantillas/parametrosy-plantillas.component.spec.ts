import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrosyPlantillasComponent } from './parametrosy-plantillas.component';

describe('ParametrosyPlantillasComponent', () => {
  let component: ParametrosyPlantillasComponent;
  let fixture: ComponentFixture<ParametrosyPlantillasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametrosyPlantillasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParametrosyPlantillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
