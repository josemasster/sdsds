import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { AutentificationService } from 'src/app/Services/autentification/autentification.service';
import { usuario } from 'src/app/usuario.module';

@Component({
  selector: 'app-carguede-achivos',
  templateUrl: './carguede-achivos.component.html',
  styleUrls: ['./carguede-achivos.component.css']
})
export class CarguedeAchivosComponent implements OnInit {
  
  directorio1=[" Home / Cargue de archivos"];
  comprobacion=true;
  Cargue=true;
  CargarPlantilla=false;
  cargo: string | null;
  cargo2:string;

  accion(entrada: any){
    if(entrada=="" || entrada.charAt(entrada.length -1,)!= "x"){
      alert("No se ha seleccionado un archivo o no es el formato correcto");
    }
    else{
      this.Cargue=false;
      this.CargarPlantilla=true;
    }
  }
  constructor( ) {
   }

  ngOnInit(): void {
    


}
};
