import { Component, OnInit } from '@angular/core';
import { MatrimonioService } from 'src/app/servicio/matrimonio.service';
import { NacimientoService } from 'src/app/servicio/nacimiento.service';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-matrimonio-list',
  templateUrl: './matrimonio-list.component.html',
  styleUrls: ['./matrimonio-list.component.css']
})
export class MatrimonioListComponent implements OnInit {

  persona: any;
  matrimonios: any;
  datosBusquedaRegistro: any = { primer_nombre: '', segundo_nombre: '' , primer_apellido: '', segundo_apellido: '' };
  resultadoParaImpresion: any;


  constructor(private MatrimonioService: MatrimonioService, private nacimientoService: NacimientoService) {
   }

  ngOnInit() {
  }

  obtenerMatrimonios() {
    this.nacimientoService.obtenerNacimientoNombres(this.datosBusquedaRegistro).subscribe(resultado => {
      this.persona = resultado;
      this.MatrimonioService.obtenerMatrimonioPorNombre(this.persona[0].primer_nombre, this.persona[0].segundo_nombre, this.persona[0].primer_apellido, this.persona[0].segundo_apellido).subscribe( matrimonio => {
        this.matrimonios = matrimonio;        
      })      
    },
      error  => {
        console.log(JSON.stringify(error));
        
      }
    )
  }

  downloadPDF(item){
    this.MatrimonioService.obtenerUnMatrimonio(item).subscribe(
      resultado => {
        this.resultadoParaImpresion = resultado
        console.log(this.resultadoParaImpresion);
        
        const doc = new jsPDF
        doc.text("Alcaldia Municipal de San Salvador", 35, 10);
        doc.text(`Folio ${this.resultadoParaImpresion.folio} libro ${this.resultadoParaImpresion.libro}`, 15,15);
        doc.text(`El dia ${this.resultadoParaImpresion.fecha} en el departamento de ${this.resultadoParaImpresion.departamento}`, 15,20);
        doc.text(`las personas ${this.resultadoParaImpresion.nombre1Esposo} ${this.resultadoParaImpresion.nombre2Esposo} ${this.resultadoParaImpresion.apellido1Esposo} ${this.resultadoParaImpresion.apellido2Esposo} y`, 15, 25)
        doc.text(`${this.resultadoParaImpresion.nombre1Esposa} ${this.resultadoParaImpresion.nombre2Esposa} ${this.resultadoParaImpresion.apellido1Esposa} ${this.resultadoParaImpresion.apellido2Esposa}`, 15, 30)
        doc.text(`contrajeron matrimonio civil ante el notario ${this.resultadoParaImpresion.nombre1Notario} ${this.resultadoParaImpresion.nombre2Notario} ${this.resultadoParaImpresion.apellido1Notario} ${this.resultadoParaImpresion.apellido2Notario}`, 15, 35)
        doc.text(`y los testigos ${this.resultadoParaImpresion.nombre1Testigo1} ${this.resultadoParaImpresion.nombre2Testigo1} ${this.resultadoParaImpresion.apellido1Testigo1} ${this.resultadoParaImpresion.apellido2Testigo1}`, 15, 40)
        doc.text(`y ${this.resultadoParaImpresion.nombre1Testigo2} 
        ${this.resultadoParaImpresion.nombre2Testigo2} ${this.resultadoParaImpresion.apellido1Testigo2} ${this.resultadoParaImpresion.apellido2Testigo2}`, 15, 45)

        doc.save(`matrimonio${this.resultadoParaImpresion.id}.pdf`)
      }, error =>{
        console.log(error);
      }
    )
  }

}
 