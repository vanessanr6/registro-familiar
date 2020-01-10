import { Component, OnInit } from '@angular/core';
import { DefuncionService } from '../../servicio/defuncion.service';
import * as jsPDF from 'jspdf';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-defuncion-list',
  templateUrl: './defuncion-list.component.html',
  styleUrls: ['./defuncion-list.component.css']
})
export class DefuncionListComponent implements OnInit {
  resultadoDefuncion: any;
  defuncionParaImpresion: any;
  datosBusquedaDefuncion: any = { primer_nombre: '', segundo_nombre: '', primer_apellido: '', segundo_apellido: '' };
  constructor(private DefuncionService: DefuncionService) { }

  ngOnInit() {
  }

  buscarDefuncion() {
    this.DefuncionService.obtenerDefuncionNombres(this.datosBusquedaDefuncion).subscribe(resultado => {
      this.resultadoDefuncion = resultado;
    },
      error => {
        alert("Defuncion no encontrada");
      })
  }

  downloadPDFDefuncion(item) {
    this.DefuncionService.ObtenerUnaDefuncion(item).subscribe(resultado => {
      this.defuncionParaImpresion = resultado;
      const doc = new jsPDF();
      doc.setFont("helvetica");
      doc.setFontSize(9);
      doc.text("LIBRO :" + this.defuncionParaImpresion.libro, 170, 10);
      doc.text("FOLIO :" + this.defuncionParaImpresion.folio, 170, 20);
      doc.text("Alcaldia Municipal de San Salvador", 65, 10);
      doc.text("PARTIDA NUMERO " + this.defuncionParaImpresion.id, 15, 20);
      doc.text(this.defuncionParaImpresion.primer_nombre + ' ' + this.defuncionParaImpresion.segundo_nombre + ' ' +
        this.defuncionParaImpresion.primer_apellido + ' ' + this.defuncionParaImpresion.segundo_apellido, 15, 30);
      doc.text("Sexo " + this.defuncionParaImpresion.sexo, 15, 40);
      doc.text("Fallecio en " + this.defuncionParaImpresion.lugar_fallecimiento, 15, 50);
      doc.text("motivo " + this.defuncionParaImpresion.motivo, 15, 60);
      doc.text("El dia " + formatDate(this.defuncionParaImpresion.fecha, 'fullDate', 'es-SV') + " ,a las " + this.defuncionParaImpresion.hora, 15, 70);
      doc.text("estado civil " + this.defuncionParaImpresion.estado_civil, 15, 80);
      doc.text("a la edad de " + this.defuncionParaImpresion.edad, 15, 90);
      doc.text("segun constancia de defuncion expedida por " + this.defuncionParaImpresion.nombre_forense, 15, 100);
      doc.text("con jvpm numero " + this.defuncionParaImpresion.jvpm_forense, 15, 110);
      doc.text("Expedida " + formatDate(this.defuncionParaImpresion.fecha_registro, 'fullDate', 'es-SV') , 15, 120)
      doc.save(this.defuncionParaImpresion.primer_nombre + this.defuncionParaImpresion.segundo_nombre + this.defuncionParaImpresion.primer_apellido + this.defuncionParaImpresion.segundo_apellido + ".pdf");
    },error =>{
      alert("El formato digital no puede ser mostrado");
    })
  }

}
