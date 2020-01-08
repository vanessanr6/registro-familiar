import { Component, OnInit } from '@angular/core';
import { MatrimonioService } from 'src/app/servicio/matrimonio.service'

@Component({
  selector: 'app-matrimonio-post',
  templateUrl: './matrimonio-post.component.html',
  styleUrls: ['./matrimonio-post.component.css']
})
export class MatrimonioPostComponent implements OnInit {

  constructor(private matrimonioService: MatrimonioService) { }

  ngOnInit() {
  }

  agregarMatrimonio(){
    console.log("Agregar");
    
  }

}
