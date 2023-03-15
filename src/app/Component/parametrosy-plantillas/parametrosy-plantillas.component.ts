import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parametrosy-plantillas',
  templateUrl: './parametrosy-plantillas.component.html',
  styleUrls: ['./parametrosy-plantillas.component.css']
})
export class ParametrosyPlantillasComponent implements OnInit {
  directorio1=[" Home / Parametros y plantillas"];
  general=true
  variableColombia=false;
  variableParaguay=false;
  variablePeru=false;
  edit=false;
  usuario="";
  paises=[
    {nombre:"Colombia"},
    {nombre:"Paraguay"},
    {nombre:"Perú"},
  ];
  plantillas_colombia=[
    {index:0, fehcha:"27/03/2022", nombre:"Plantillas Colombia"},
    {index:1, fehcha:"27/03/2022", nombre:"Plantillas Colombia"},
    {index:2, fehcha:"27/03/2022", nombre:"Plantillas Colombia"},
    {index:3, fehcha:"27/03/2022", nombre:"Plantillas Colombia"},
    {index:4, fehcha:"27/03/2022", nombre:"Plantillas Colombia"},
    {index:5, fehcha:"27/03/2022", nombre:"Plantillas Colombia"},

  ];
  plantillas_peru=[
    {fehcha:"27/03/2022", nombre:"Plantillas Peru"},


  ];
  plantillas_paraguay=[
    {fehcha:"27/03/2022", nombre:"Plantillas Paraguay"},


  ];


  accion(opcion:string){
    if(opcion=="Colombia"){
      this.variableColombia=true;
      this.variableParaguay=false;
      this.variablePeru=false;
    }
    else if(opcion=="Paraguay"){
      this.variableParaguay=true;
      this.variableColombia=false;
      this.variablePeru=false;
    }
    else{
      this.variablePeru=true;
      this.variableParaguay=false;
      this.variableColombia=false;

    }
  };
  editplantilla(){
    this.general=false;
    this.edit=true;
  }
  deleteplantillas(index:number){
    if(confirm("Seguro que quiere eliminar la plantillas?")){
      delete(this.plantillas_colombia[index]);

    }
  
  }

  constructor() { }

  ngOnInit(): void {
  }

}
