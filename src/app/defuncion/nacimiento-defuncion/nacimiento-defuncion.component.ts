import { Component, OnInit } from '@angular/core';
import { NacimientoService } from '../../servicio/nacimiento.service';

@Component({
  selector: 'app-nacimiento-defuncion',
  templateUrl: './nacimiento-defuncion.component.html',
  styleUrls: ['./nacimiento-defuncion.component.css']
})
export class NacimientoDefuncionComponent implements OnInit {

  datosBusquedaRegistro: any = { primer_nombre: '', segundo_nombre: '', primer_apellido: '', segundo_apellido: '' };
  resultadoNacimiento: any;
  constructor(private NacimientoService: NacimientoService) { }

  ngOnInit() {
  }

  buscarRegistro() {
    this.NacimientoService.obtenerNacimientoNombres(this.datosBusquedaRegistro).subscribe(resultado => {
      this.resultadoNacimiento = resultado;
    },
      error => {
        alert('Registro no Encontrado');
      })
  }

  

}
