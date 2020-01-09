import { Component, OnInit } from '@angular/core';
import { MatrimonioService } from 'src/app/servicio/matrimonio.service';
import { NacimientoService } from 'src/app/servicio/nacimiento.service';

@Component({
  selector: 'app-matrimonio-list',
  templateUrl: './matrimonio-list.component.html',
  styleUrls: ['./matrimonio-list.component.css']
})
export class MatrimonioListComponent implements OnInit {

  persona: any;
  matrimonios: any;
  datosBusquedaRegistro: any = { primer_nombre: '', segundo_nombre: '' , primer_apellido: '', segundo_apellido: '' };


  constructor(private MatrimonioService: MatrimonioService, private nacimientoService: NacimientoService) {
   }

  ngOnInit() {
  }

  obtenerMatrimonios() {
    this.nacimientoService.obtenerNacimientoNombres(this.datosBusquedaRegistro).subscribe(resultado => {
      this.persona = resultado;
      this.MatrimonioService.obtenerMatrimonioPorNombre(this.persona[0].primer_nombre, this.persona[0].segundo_nombre, this.persona[0].primer_apellido, this.persona[0].segundo_apellido).subscribe( matrimonio => {
        this.matrimonios = matrimonio;
        console.log(this.matrimonios);
        
      })      
    },
      error  => {
        console.log(JSON.stringify(error));
        
      }
    )
  }
  // obtenerMatrimonios() {
  //   this.MatrimonioService.obtenerMatrimonios().subscribe(resultado => {
  //     this.matrimonios = resultado;
  //   },
  //     error  => {
  //       console.log(JSON.stringify(error));
        
  //     }
  //   )
  // }

}
 