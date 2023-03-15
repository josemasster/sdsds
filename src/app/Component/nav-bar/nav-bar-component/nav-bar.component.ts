import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AutentificationService } from 'src/app/Services/autentification/autentification.service';
import { usuario } from 'src/app/usuario.module';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {


  Carguedeplantillas=false;
  parametrosyPlantillas=false;
  ejecuciondeFlujos=false;
  gestiondeusuario=false;
  auditoria=false;
 
 

  constructor() { }

  ngOnInit(): void {
    
  }
}
