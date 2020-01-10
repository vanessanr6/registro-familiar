import { Component, OnInit } from '@angular/core';
import { DivorcioService } from 'src/app/servicio/divorcio.service';
import { NacimientoService } from 'src/app/servicio/nacimiento.service';

@Component({
  selector: 'app-divorcio-post',
  templateUrl: './divorcio-post.component.html',
  styleUrls: ['./divorcio-post.component.css']
})
export class DivorcioPostComponent implements OnInit {

  esposa: any;
  esposo: any;
  agregarDivorcioRegistro: any = { nombre1Esposo: '', nombre2Esposo: '', apellido1Esposo: '', apellido2Esposo: '', nombre1Esposa: '', nombre2Esposa: '', apellido1Esposa: '', apellido2Esposa: '', fecha: '', idEsposo: '', idEsposa: '', libro: '', folio: '', departamento: '', nombre1Notario: '', nombre2Notario:'', apellido1Notario:'', apellido2Notario:''}

  constructor(private divorcioService: DivorcioService, private nacimientoService: NacimientoService) { }

  ngOnInit() {
  }

  agregarDivorcio(){
    const divorcio = this.agregarDivorcioRegistro
    this.divorcioService.agregarDivorcio(divorcio).subscribe(
      resultado => {
        console.log(divorcio);
        this.nacimientoService.obtenerPersona(divorcio.nombre1Esposa, divorcio.nombre2Esposa, divorcio.apellido1Esposa, divorcio.apellido2Esposa).subscribe(
          resultado => {
            this.esposa = resultado
            console.log("TCL: DivorcioPostComponent -> agregarDivorcio -> esposa", this.esposa)

            const datosEsposa = {
              'id': this.esposa[0].id,
              'apellido_casada': '',
              'estado_civil': 'Soltera',
              'dui': this.esposa[0].dui,
                  'lugar_nacimiento': this.esposa[0].lugar_nacimiento,
                  'mayoria_edad': this.esposa[0].mayoria_edad,
                  'padre': this.esposa[0].padre,
                  'madre': this.esposa[0].madre,
                  'hora': this.esposa[0].hora,
                  'fecha_nacimiento': this.esposa[0].fecha_nacimiento,
                  'hospital': this.esposa[0].hospital,
                  'sexo': this.esposa[0].sexo,
                  'primer_nombre': this.esposa[0].primer_nombre,
                  'segundo_nombre': this.esposa[0].segundo_nombre, 
                  'primer_apellido': this.esposa[0].primer_apellido,
                  'segundo_apellido': this.esposa[0].segundo_apellido
            }

            this.nacimientoService.actualizarPersona(datosEsposa, this.esposa[0].id).subscribe(
              resultado => {
                this.nacimientoService.obtenerPersona(divorcio.nombre1Esposo, divorcio.nombre2Esposo, divorcio.apellido1Esposo, divorcio.apellido2Esposo).subscribe(
                  resultado => {
                    this.esposo = resultado
                    console.log("TCL: DivorcioPostComponent -> agregarDivorcio -> esposo", this.esposo)
                    
                    const datosEsposo = {
                      'id': this.esposo[0].id,
                      'dui': this.esposo[0].dui,
                  'lugar_nacimiento': this.esposo[0].lugar_nacimiento,
                  'mayoria_edad': this.esposo[0].mayoria_edad,
                  'padre': this.esposo[0].padre,
                  'madre': this.esposo[0].madre,
                  'hora': this.esposo[0].hora,
                  'fecha_nacimiento': this.esposo[0].fecha_nacimiento,
                  'hospital': this.esposo[0].hospital,
                  'sexo': this.esposo[0].sexo,
                      'estado_civil': 'Soltero',
                      'primer_nombre': this.esposo[0].primer_nombre,
                  'segundo_nombre': this.esposo[0].segundo_nombre, 
                  'primer_apellido': this.esposo[0].primer_apellido,
                  'segundo_apellido': this.esposo[0].segundo_apellido,
                    }

                    this.nacimientoService.actualizarPersona(datosEsposo, this.esposo[0].id).subscribe(
                      resultado => {
                        location.href = "/divorcio"
                      }, error => {
                        console.log(error);                        
                      }
                    )
                  }, error => {
                    console.log(error);
                  }
                )
              }, error => {
                console.log(error);
              }
            )
          }, error => {
            console.log(error);
          }
        )
      }, error => {
        console.log(error);
      }
    ) 
  }

}
