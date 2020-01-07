import { Component, OnInit } from '@angular/core';
import { NacimientoService } from '../servicio/nacimiento.service';
@Component({
  selector: 'app-nacimiento-post',
  templateUrl: './nacimiento-post.component.html',
  styleUrls: ['./nacimiento-post.component.css']
})
export class NacimientoPostComponent implements OnInit {
  nacimientos: any;
  agregarNacimientoRegistro : any = { primer_nombre: '', segundo_nombre: '', primer_apellido: '', segundo_apellido: '', sexo: '', hospital: '', lugar_nacimiento: '' , hora: '', fecha_nacimiento: '', madre: '', padre: ''}
  datosBusqueda: any = { primer_nombre: '', segundo_nombre: '', primer_apellido: '', segundo_apellido: '' };
  constructor(private NacimientoService: NacimientoService) { }

  ngOnInit() {
  }

  agregarNacimiento(){
    console.log("Evento guardar");
    this.NacimientoService.agregarNacimiento(this.agregarNacimientoRegistro).subscribe( resultado => {
    },
    error => {
      console.log(error);
    })
  }

  buscarNacimientoNombres(){
    console.log("Evento guardar");
    this.NacimientoService.obtenerNacimientoNombres(this.datosBusqueda).subscribe( resultado => {
      this.nacimientos = resultado;
      console.log(this.nacimientos);
    },
    error => {
      console.log(error);
    })
  }

}
