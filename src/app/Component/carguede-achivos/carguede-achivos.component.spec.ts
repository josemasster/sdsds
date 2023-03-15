import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarguedeAchivosComponent } from './carguede-achivos.component';

describe('CarguedeAchivosComponent', () => {
  let component: CarguedeAchivosComponent;
  let fixture: ComponentFixture<CarguedeAchivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarguedeAchivosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarguedeAchivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
