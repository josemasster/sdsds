import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestiondeUsuariosComponent } from './gestionde-usuarios.component';

describe('GestiondeUsuariosComponent', () => {
  let component: GestiondeUsuariosComponent;
  let fixture: ComponentFixture<GestiondeUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestiondeUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestiondeUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
