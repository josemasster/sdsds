import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-map',
  templateUrl: './nav-map.component.html',
  styleUrls: ['./nav-map.component.css']
})
export class NavMapComponent implements OnInit {
  @Input() directorio:string="Home";

  constructor() { 
    

  }

  ngOnInit(): void {
  }

}
