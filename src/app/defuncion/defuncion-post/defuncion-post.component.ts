import { Component, OnInit } from '@angular/core';
import { DefuncionService } from '../../servicio/defuncion.service';

@Component({
  selector: 'app-defuncion-post',
  templateUrl: './defuncion-post.component.html',
  styleUrls: ['./defuncion-post.component.css']
})
export class DefuncionPostComponent implements OnInit {

  agregarDefuncionRegistro : any = { primer_nombre: '', segundo_nombre: '', primer_apellido: '', segundo_apellido: '',apellido_casada: '' , sexo: '', lugar_fallecimiento: '', estado_civil: '', fecha: '',  hora: '' , edad: '', motivo: '',nombre_forense: '', jvpm_forense: '', libro: '', folio: '', fecha_registro: new Date() }
  constructor(private DefuncionService: DefuncionService) { }

  ngOnInit() {
  }
  
  agregarDefuncion(){
    this.DefuncionService.agregarDefuncion(this.agregarDefuncionRegistro).subscribe( resultado =>{
      location.href = '/defuncion';
    },
    error => {
      alert('No se puede agregar el registro, complete todos los campos');
    })
  }
  
}
