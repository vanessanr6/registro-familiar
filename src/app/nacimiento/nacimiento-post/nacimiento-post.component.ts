import { Component, OnInit } from '@angular/core';
import { NacimientoService } from '../../servicio/nacimiento.service';
@Component({
  selector: 'app-nacimiento-post',
  templateUrl: './nacimiento-post.component.html',
  styleUrls: ['./nacimiento-post.component.css']
})
export class NacimientoPostComponent implements OnInit {
  resultadoMadre: any;
  resultadoPadre: any;
  agregarNacimientoRegistro : any = { primer_nombre: '', segundo_nombre: '', primer_apellido: '', segundo_apellido: '', sexo: '', hospital: '', lugar_nacimiento: '' , hora: '', fecha_nacimiento: '', madre: '', padre: '', libro: '', folio: ''}
  datosBusqueda: any = { primer_nombre: '', segundo_nombre: '', primer_apellido: '', segundo_apellido: '' };
  datosBusquedaPadre: any = { primer_nombre: '', segundo_nombre: '', primer_apellido: '', segundo_apellido: '' };
  constructor(private NacimientoService: NacimientoService) { }

  ngOnInit() {
  }

  agregarNacimiento(){
    console.log("Evento guardar");
    this.NacimientoService.agregarNacimiento(this.agregarNacimientoRegistro).subscribe( resultado => {
      console.log('correcto;');
      location.href = '/nacimiento';
    },
    error => {
      alert('No se pudo agregar el registro');
    })
  }

  buscarPersonaMadre(){
    console.log("Evento guardar");
    this.NacimientoService.obtenerNacimientoNombres(this.datosBusqueda).subscribe( resultado => {
      this.resultadoMadre = resultado;
      console.log(this.resultadoMadre);
    },
    error => {
      console.log(error);
    })
  }

  buscarPersonaPadre(){
    console.log("Evento guardar");
    this.NacimientoService.obtenerNacimientoNombres(this.datosBusquedaPadre).subscribe( resultado => {
      this.resultadoPadre = resultado;
      console.log(this.resultadoPadre);
    },
    error => {
      console.log(error);
    })
  }

}
