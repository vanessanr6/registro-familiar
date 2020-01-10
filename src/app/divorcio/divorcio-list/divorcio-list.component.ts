import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';
import { DivorcioService } from 'src/app/servicio/divorcio.service';
import { NacimientoService } from 'src/app/servicio/nacimiento.service';


@Component({
  selector: 'app-divorcio-list',
  templateUrl: './divorcio-list.component.html',
  styleUrls: ['./divorcio-list.component.css']
})
export class DivorcioListComponent implements OnInit {

  persona: any;
  divorcios: any;
  datosBusquedaRegistro: any = { primer_nombre: '', segundo_nombre: '' , primer_apellido: '', segundo_apellido: '' };
  resultadoParaImpresion: any;

  constructor(private divorcioService: DivorcioService, private nacimientoService: NacimientoService) { }

  ngOnInit() {
  }

  obtenerDivorcios() {
    this.nacimientoService.obtenerNacimientoNombres(this.datosBusquedaRegistro).subscribe(resultado => {
      this.persona = resultado;
     
    },
      error  => {
        console.log(JSON.stringify(error));
        
      }
    )
  }

  downloadPDF(item){
    this.divorcioService.obtenerUnDivorcio(item).subscribe(
      resultado => {
        this.resultadoParaImpresion = resultado
        console.log(this.resultadoParaImpresion);
        
        const doc = new jsPDF
        doc.text("Alcaldia Municipal de San Salvador", 35, 10);
        doc.text(`Folio ${this.resultadoParaImpresion.folio} libro ${this.resultadoParaImpresion.libro}`, 15,15);
        doc.text(`El dia ${this.resultadoParaImpresion.fecha} en el departamento de ${this.resultadoParaImpresion.departamento}`, 15,20);
        doc.text(`las personas ${this.resultadoParaImpresion.nombre1Esposo} ${this.resultadoParaImpresion.nombre2Esposo} ${this.resultadoParaImpresion.apellido1Esposo} ${this.resultadoParaImpresion.apellido2Esposo} y`, 15, 25)
        doc.text(`${this.resultadoParaImpresion.nombre1Esposa} ${this.resultadoParaImpresion.nombre2Esposa} ${this.resultadoParaImpresion.apellido1Esposa} ${this.resultadoParaImpresion.apellido2Esposa}`, 15, 30)
        doc.text(`solicitaron divorcio ante el notario ${this.resultadoParaImpresion.nombre1Notario} ${this.resultadoParaImpresion.nombre2Notario} ${this.resultadoParaImpresion.apellido1Notario} ${this.resultadoParaImpresion.apellido2Notario}`, 15, 35)

        doc.save(`matrimonio${this.resultadoParaImpresion.id}.pdf`)
      }, error =>{
        console.log(error);
      }
    )
  }

}
