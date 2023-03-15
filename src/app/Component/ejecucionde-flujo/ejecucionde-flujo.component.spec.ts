import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjecuciondeFlujoComponent } from './ejecucionde-flujo.component';

describe('EjecuciondeFlujoComponent', () => {
  let component: EjecuciondeFlujoComponent;
  let fixture: ComponentFixture<EjecuciondeFlujoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjecuciondeFlujoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjecuciondeFlujoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
