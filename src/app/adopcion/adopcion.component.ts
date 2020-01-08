import { Component, OnInit } from '@angular/core';
import { AdopcionService } from '../servicio/adopcion.service';

@Component({
  selector: 'app-adopcion',
  templateUrl: './adopcion.component.html',
  styleUrls: ['./adopcion.component.css']
})
export class AdopcionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 
  buscarPersonaPorNombre(){
  }
}
