import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AutentificationService } from 'src/app/Services/autentification/autentification.service';
import { usuario } from 'src/app/usuario.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  info=[""];
  public myForm!:FormGroup;
  ruta=""
 
  

  constructor(private fb:FormBuilder, private loginPrd:AutentificationService) {
   
  }

  ngOnInit(): void {
    this.myForm = this.createMyForm();
    
  }

  private createMyForm():FormGroup{
    return this.fb.group({
      usuario:["", Validators.required],
      password:["", Validators.required],
    })
  }

  public submitFormulario(){
    
    // console.log(this.myForm); sirve para ver la informacion del form
    if(this.myForm.invalid){
      return alert("Ingresa algun dato");
       this.ruta= '/login'
    }
    
    if(this.loginPrd.ingresarAplicativo(this.myForm.value)== false){
      alert("Usuario o contraseña invalido")
      this.ruta ='/login'
    }
    else{
      this.ruta="/nav"

    }
  }




}
