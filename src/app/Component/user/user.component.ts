import { Component, OnInit } from '@angular/core';
import {AutentificationService} from '../../Services/autentification/autentification.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    
  }

  eliminartoken(){
    localStorage.removeItem('token')
         
  }

}
