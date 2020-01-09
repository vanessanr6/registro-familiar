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
    this.NacimientoService.agregarNacimiento(this.agregarNacimientoRegistro).subscribe( resultado => {
      location.href = '/nacimiento';
    },
    error => {
      alert('No se pudo agregar el registro, complete todos los campos');
    })
  }

  buscarPersonaMadre(){
    this.NacimientoService.obtenerNacimientoNombres(this.datosBusqueda).subscribe( resultado => {
      this.resultadoMadre = resultado;
    },
    error => {
      alert('Persona No Encontrada');
    })
  }

  buscarPersonaPadre(){
    this.NacimientoService.obtenerNacimientoNombres(this.datosBusquedaPadre).subscribe( resultado => {
      this.resultadoPadre = resultado;
    },
    error => {
      alert('Persona No Encontrada');
    })
  }

}
