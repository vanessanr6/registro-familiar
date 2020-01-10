import { Component, OnInit } from '@angular/core';
import { DivorcioService } from 'src/app/servicio/divorcio.service';
import { MatrimonioService } from 'src/app/servicio/matrimonio.service';

@Component({
  selector: 'app-divorcio-post',
  templateUrl: './divorcio-post.component.html',
  styleUrls: ['./divorcio-post.component.css']
})
export class DivorcioPostComponent implements OnInit {

  divorcioEsposa: any;
  esposo: any;
  agregarDivorcioRegistro: any = { nombre1Esposo: '', nombre2Esposo: '', apellido1Esposo: '', apellido2Esposo: '', nombre1Esposa: '', nombre2Esposa: '', apellido1Esposa: '', apellido2Esposa: '', fecha: '', idEsposo: '', idEsposa: '', libro: '', folio: '', departamento: '', nombre1Notario: '', nombre2Notario:'', apellido1Notario:'', apellido2Notario:''}

  constructor(private divorcioService: DivorcioService, private matrimonioService: MatrimonioService) { }

  ngOnInit() {
  }

  agregarDivorcio(){
    const divorcio = this.agregarDivorcioRegistro
    this.divorcioService.agregarDivorcio(divorcio).subscribe(
      result => {
        console.log(divorcio);
        
        this.matrimonioService.obtenerMatrimonioPorEsposos(divorcio.nombre1Esposo, divorcio.nombre2Esposo, divorcio.apellido1Esposo, divorcio.apellido2Esposo,divorcio.nombre1Esposa, divorcio.nombre2Esposa, divorcio.apellido1Esposa, divorcio.apellido2Esposa).subscribe(
          resultado => {    
            const matrimonio = resultado        
            console.log(resultado);

            // const datosMatrimonio = {
            //   'id'
            // }
            
          }, error => {
            console.log(error);
          }
        )
      }, error => {

      }
    ) 
  }

}
