import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestionde-usuarios',
  templateUrl: './gestionde-usuarios.component.html',
  styleUrls: ['./gestionde-usuarios.component.css']
})
export class GestiondeUsuariosComponent implements OnInit {
  directorio1=[" Home / Gestión de usuarios"];

  general=true
  variableColombia=false;
  variableParaguay=false;
  variablePeru=false;
  edit=false;
  crear=false;
  boton=false;
  paises=[
    {nombre:"Colombia"},
    {nombre:"Paraguay"},
    {nombre:"Perú"},
  ];
  usuario_colombia=[
    {index:1, nombre:"Jose Guillermo Vargas", cargo:"Planeacion"},
    {index:2, nombre:"Jose Guillermo Vargas", cargo:"Riesgos"},
    {index:3, nombre:"Jose Guillermo Vargas", cargo:"Filiales"},
    {index:4, nombre:"Jose Guillermo Vargas", cargo:"Administracion Permisos"},
    {index:5, nombre:"Jose Guillermo Vargas", cargo:"Colombia"},


  ];
  usuario_peru=[
    {index:1, nombre:"Jose Guillermo Vargas", cargo:"Planeacion"},
    {index:2, nombre:"Jose Guillermo Vargas", cargo:"Riesgos"},
    {index:3, nombre:"Jose Guillermo Vargas", cargo:"Filiales"},
    {index:4, nombre:"Jose Guillermo Vargas", cargo:"Administracion Permisos"},
    {index:5, nombre:"Jose Guillermo Vargas", cargo:"Perú"},

    


  ];
  usuario_paraguay=[
    {index:1, nombre:"Jose Guillermo Vargas", cargo:"Planeacion"},
    {index:2, nombre:"Jose Guillermo Vargas", cargo:"Riesgos"},
    {index:3, nombre:"Jose Guillermo Vargas", cargo:"Filiales"},
    {index:4, nombre:"Jose Guillermo Vargas", cargo:"Administracion Permisos"},
    {index:5, nombre:"Jose Guillermo Vargas", cargo:"Paraguay"},



  ];


  accion(opcion:string){
    if(opcion=="Colombia"){
      this.variableColombia=true;
      this.boton=true;
      this.variableParaguay=false;
      this.variablePeru=false;
    }
    else if(opcion=="Paraguay"){
      this.variableParaguay=true;
      this.boton=true;
      this.variableColombia=false;
      this.variablePeru=false;

    }
    else{
      this.variablePeru=true;
      this.boton=true;
      this.variableColombia=false;
      this.variableParaguay=false;


    }
  };
  editusuario(){
    this.general=false;
    this.edit=true;
    this.boton=false;
  }
  deleteusuario(index:number){
    if(confirm("Seguro que quiere eliminar este usuario?")){
      delete(this.usuario_colombia[index-1]);

    }
  
  }
  crearusuario(){
    this.general=false;
    this.edit=false;
    this.crear=true;
    this.boton=false;

  }
  constructor() { }

  ngOnInit(): void {
  }

}
