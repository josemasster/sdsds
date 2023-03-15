import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carga-plantilla',
  templateUrl: './carga-plantilla.component.html',
  styleUrls: ['./carga-plantilla.component.css']
})
export class CargaPlantillaComponent implements OnInit {

  excelInput=document.getElementById("excel-input");
  
  

  constructor() { }

  ngOnInit(): void {
  }

}
