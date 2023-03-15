import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  caracter1:string="J"
  caracter2:string="G"
  user:string="Jose"

  constructor() { }

  ngOnInit(): void {
  }

}
