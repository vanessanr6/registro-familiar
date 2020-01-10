import { Component, OnInit } from '@angular/core';
import { NacimientoService } from '../../servicio/nacimiento.service';
import * as jsPDF from 'jspdf';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-nacimiento',
  templateUrl: './nacimiento.component.html',
  styleUrls: ['./nacimiento.component.css']
})
export class NacimientoComponent implements OnInit {

  resultadoNacimiento: any;
  resultadoParaImpresion : any;
  datosBusquedaRegistro: any = { primer_nombre: '', segundo_nombre: '' , primer_apellido: '', segundo_apellido: '' };

  constructor(private NacimientoService: NacimientoService) { 
    
  }

  buscarRegistro(){
    console.log("Evento guardar");
    this.NacimientoService.obtenerNacimientoNombres(this.datosBusquedaRegistro).subscribe( resultado => {
      this.resultadoNacimiento = resultado;
      console.log(this.resultadoNacimiento);
    }, 
    error => {
      console.log(error);
    })
  }

  ngOnInit() {
  }

  downloadPDF(item){

    this.NacimientoService.ObtenerUnNacimientos(item).subscribe(resultado =>{
      this.resultadoParaImpresion = resultado
      console.log(this.resultadoParaImpresion);
      const doc = new jsPDF();
      doc.text("Alcaldia Municipal de San Salvador", 35, 10);
      doc.text("PARTIDA NUMERO" + this.resultadoParaImpresion.id, 15, 15);
      doc.text("Nombre:" + this.resultadoParaImpresion.primer_nombre + this.resultadoParaImpresion.segundo_nombre+ 
      this.resultadoParaImpresion.primer_apellido + this.resultadoParaImpresion.segundo_apellido,15, 20);
      
      
      doc.save(this.resultadoParaImpresion.primer_nombre + ".pdf");
    }, error =>{
      console.log(error);
    })
  }

  eliminarNacimiento(identificador){
    this.NacimientoService.eliminarPersona(identificador).subscribe(resultado => {
    }, 
    error => {
      console.log(error);
    });
  }

}
