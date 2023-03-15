import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaPlantillaComponent } from './carga-plantilla.component';

describe('CargaPlantillaComponent', () => {
  let component: CargaPlantillaComponent;
  let fixture: ComponentFixture<CargaPlantillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargaPlantillaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargaPlantillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
