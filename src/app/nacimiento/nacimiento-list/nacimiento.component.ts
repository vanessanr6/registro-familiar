import { Component, OnInit } from '@angular/core';
import { NacimientoService } from '../../servicio/nacimiento.service';
import * as jsPDF from 'jspdf';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-nacimiento',
  templateUrl: './nacimiento.component.html',
  styleUrls: ['./nacimiento.component.css']
})
export class NacimientoComponent implements OnInit {

  resultadoNacimiento: any;

  resultadoMadre: any;
  resultadoMadreGlobal: any;
  resultadoParaImpresion: any;
  datosBusquedaRegistro: any = { primer_nombre: '', segundo_nombre: '', primer_apellido: '', segundo_apellido: '' };

  constructor(private NacimientoService: NacimientoService) {

  }

  buscarRegistro() {
    console.log("Evento guardar");
    this.NacimientoService.obtenerNacimientoNombres(this.datosBusquedaRegistro).subscribe(resultado => {
      this.resultadoNacimiento = resultado;
      console.log(this.resultadoNacimiento);
    },
      error => {
        console.log(error);
      })
  }



  ngOnInit() {
  }

  downloadPDF(item) {

    this.NacimientoService.ObtenerUnNacimientos(item).subscribe(resultado => {
      this.resultadoParaImpresion = resultado
      console.log(this.resultadoParaImpresion);
      formatDate(this.resultadoParaImpresion.fecha_nacimiento, 'long', 'es-SV')
      const doc = new jsPDF();
      doc.setFont("helvetica");
      doc.setFontSize(9);
      doc.text("LIBRO :" + this.resultadoParaImpresion.libro, 170, 10);
      doc.text("FOLIO :" + this.resultadoParaImpresion.libro, 170, 20);
      doc.text("Alcaldia Municipal de San Salvador", 65, 10);
      doc.text("PARTIDA NUMERO " + this.resultadoParaImpresion.id, 15, 20);
      doc.text(this.resultadoParaImpresion.primer_nombre + ' ' + this.resultadoParaImpresion.segundo_nombre + ' ' +
        this.resultadoParaImpresion.primer_apellido + ' ' + this.resultadoParaImpresion.segundo_apellido, 15, 30);
      doc.text("Sexo " + this.resultadoParaImpresion.sexo, 15, 40);
      doc.text("Nacio en " + this.resultadoParaImpresion.lugar_nacimiento, 15, 50);
      doc.text("En Hospital " + this.resultadoParaImpresion.hospital, 15, 60);
      doc.text("El dia " + formatDate(this.resultadoParaImpresion.fecha_nacimiento, 'fullDate', 'es-SV') + " ,a las " + this.resultadoParaImpresion.hora, 15, 70);
      if (this.resultadoParaImpresion.sexe == 'Masculino') {
        doc.text("Hijo de " + this.resultadoParaImpresion.madre, 15, 80);
      }
      else {
        doc.text("Hija de " + this.resultadoParaImpresion.madre, 15, 80);
      }
      doc.text("Y de " + this.resultadoParaImpresion.padre, 15, 90);
      doc.text("Padre del Inscrito(a)", 15, 100);
      doc.text("ALCALDIA MUNICIPAL DE SAN SALVADOR ", 15, 110);
      doc.text(formatDate(new Date(), 'fullDate', 'es-SV'), 15, 120)
      doc.save(this.resultadoParaImpresion.primer_nombre + this.resultadoParaImpresion.segundo_nombre + this.resultadoParaImpresion.primer_apellido + this.resultadoParaImpresion.segundo_apellido + ".pdf");
    }, error => {
      console.log(error);
    })
  }

  eliminarNacimiento(identificador) {
    this.NacimientoService.eliminarPersona(identificador).subscribe(resultado => {
    },
      error => {
        console.log(error);
      });
  }

}
