
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

interface Tokenapi{
  token:string;
 }

@Injectable({
  providedIn: 'root'
})



export class AutentificationService{
  ingresar:boolean
//constructor 
  constructor (private http:HttpClient) {}

  url: 'http://localhost:3002'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',

    })
  };


 ingresarAplicativo(obj:any):any{
  console.log(obj.usuario, obj.password)
   const infor ={
    email:obj.usuario,
    password:obj.password

  }
  return this.http
  .post <Tokenapi>(
    'http://localhost:3002/login',
    infor,
    this.httpOptions
  )
  .pipe(retry(1), catchError(this.errorHandl)).subscribe(token=>{
    console.log(token)
    localStorage.setItem('token',token.token)});
}
//funcion

 

errorHandl(error:any) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(() => {
    return errorMessage;
  });
}
habilitarlogueo(){
  return this.ingresar;
}
habilitarsesion():boolean{
  return this.ingresar;
 }



}



/*import { Injectable } from '@angular/core';
import { usuario } from '../../usuario.module';

@Injectable({
  providedIn: 'root'
})
export class AutentificationService {
  private ingresar=false;
 

  infouserbd:usuario[]= [
      new usuario("Jose Guillermo Vargas Rodriguez", "AdminPermisos", "Joseh.jgvr55@gmail.com", "123"),
      new usuario("Carlos Andres Patarroyo Galeano", "Planeacion", "carlos@gmial.com", "456"),
      new usuario("Ana Maria Polania", "Riesgos","Anamaria@gmial.com", "789"),
      new usuario("Maria Paula Castillo", "Filiales", "MariaPaula@gmial.com", "123"),
     ];
  autenticado:usuario[];
  constructor() { }
  
  ingresarAplicativo(obj:any):any{
    this.apiautenticacion(obj.usuario,obj.password);
    for(let info of this.infouserbd){ 
      if(obj.usuario == info.correo && obj.password == info.password){
        this.autenticado = [new usuario(info.nombre,info.cargo,info.correo,info.password)];
        
        this.ingresar= true;
      }
    };
    return this.ingresar;
    };



  habilitarlogueo(){
    return this.ingresar;
  }

  habilitarsesion():usuario{
   return this.autenticado[0];
  }

  apiautenticacion( correo:string, password:string){
    const infor = {correo:correo, password:password};
    const inforjson = JSON.stringify(infor);
   fetch('http://localhost:3001/autentificacion',{
    method:'post',
    headers:{"Content-Type": "application/json"},
    body: inforjson
   });

   console.log(inforjson);

 }
}*/
