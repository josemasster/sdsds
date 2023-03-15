import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AutentificationService } from 'src/app/Services/autentification/autentification.service';
import { usuario } from 'src/app/usuario.module';

@Component({
  selector: 'app-ejecucionde-flujo',
  templateUrl: './ejecucionde-flujo.component.html',
  styleUrls: ['./ejecucionde-flujo.component.css']
})
export class EjecuciondeFlujoComponent implements OnInit {
  directorio1=[" Home / Ejecución de flujos"];

  constructor() { 
  }


 ngOnInit(): void {

 }
}
