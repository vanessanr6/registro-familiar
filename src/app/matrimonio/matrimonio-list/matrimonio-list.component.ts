import { Component, OnInit } from '@angular/core';
import { MatrimonioService } from 'src/app/servicio/matrimonio.service';

@Component({
  selector: 'app-matrimonio-list',
  templateUrl: './matrimonio-list.component.html',
  styleUrls: ['./matrimonio-list.component.css']
})
export class MatrimonioListComponent implements OnInit {

  matrimonios: any;

  constructor(private MatrimonioService: MatrimonioService) {
    this.obtenerMatrimonios()
   }

  ngOnInit() {
  }

  obtenerMatrimonios() {
    this.MatrimonioService.obtenerMatrimonios().subscribe(resultado => {
      this.matrimonios = resultado;
    },
      error  => {
        console.log(JSON.stringify(error));
        
      }
    )
  }

}
 