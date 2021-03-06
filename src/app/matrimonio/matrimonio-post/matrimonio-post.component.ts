import { Component, OnInit } from '@angular/core';
import { MatrimonioService } from 'src/app/servicio/matrimonio.service'
import { NacimientoService } from 'src/app/servicio/nacimiento.service'

@Component({
  selector: 'app-matrimonio-post',
  templateUrl: './matrimonio-post.component.html',
  styleUrls: ['./matrimonio-post.component.css']
})
export class MatrimonioPostComponent implements OnInit {

  esposa: any;
  esposo: any;
  agregarMatrimonioRegistro: any = { nombre1Esposo: '', nombre2Esposo: '', apellido1Esposo: '', apellido2Esposo: '', nombre1Esposa: '', nombre2Esposa: '', apellido1Esposa: '', apellido2Esposa: '', fecha: '', idEsposo: '', idEsposa: '', libro: '', folio: '', departamento: '', vigente: true, nombre1Testigo1: '', nombre2Testigo1:'', apellido1Testigo1:'', apellido2Testigo1: '', nombre1Testigo2: '', nombre2Testigo2:'', apellido1Testigo2:'', apellido2Testigo2: '', nombre1Notario: '', nombre2Notario:'', apellido1Notario:'', apellido2Notario:''}

  constructor(private matrimonioService: MatrimonioService, private nacimientoService: NacimientoService) { }

  ngOnInit() {
  }

  agregarMatrimonio(){
    const matrimonio = this.agregarMatrimonioRegistro;
    
    this.matrimonioService.agregarMatrimonio(matrimonio).subscribe( result => {
      this.nacimientoService.obtenerPersona(matrimonio.nombre1Esposa, matrimonio.nombre2Esposa, matrimonio.apellido1Esposa, matrimonio.apellido2Esposa).subscribe(
        resultado =>  {
          this.esposa = resultado; 
          
          const datosEsposa = {
            'id': this.esposa[0].id,
            'primer_nombre': this.esposa[0].primer_nombre,
            'segundo_nombre': this.esposa[0].segundo_nombre, 
            'primer_apellido': this.esposa[0].primer_apellido,
            'segundo_apellido': this.esposa[0].segundo_apellido,
            'apellido_casada': matrimonio.apellido_casada,
            'estado_civil': 'Casada',
            'dui': this.esposa[0].dui,
                  'lugar_nacimiento': this.esposa[0].lugar_nacimiento,
                  'mayoria_edad': this.esposa[0].mayoria_edad,
                  'padre': this.esposa[0].padre,
                  'madre': this.esposa[0].madre,
                  'hora': this.esposa[0].hora,
                  'fecha_nacimiento': this.esposa[0].fecha_nacimiento,
                  'hospital': this.esposa[0].hospital,
                  'sexo': this.esposa[0].sexo,
          }
          
          this.nacimientoService.actualizarPersona(datosEsposa, this.esposa[0].id).subscribe( resultado => {
            this.nacimientoService.obtenerPersona(matrimonio.nombre1Esposo, matrimonio.nombre2Esposo, matrimonio.apellido1Esposo, matrimonio.apellido2Esposo).subscribe(
              resultado => {
                this.esposo = resultado;
                console.log(this.esposo);
                
                const datosEsposo = {
                  'id': this.esposo[0].id,
                  'primer_nombre': this.esposo[0].primer_nombre,
                  'segundo_nombre': this.esposo[0].segundo_nombre, 
                  'primer_apellido': this.esposo[0].primer_apellido,
                  'segundo_apellido': this.esposo[0].segundo_apellido,
                  'dui': this.esposo[0].dui,
                  'lugar_nacimiento': this.esposo[0].lugar_nacimiento,
                  'mayoria_edad': this.esposo[0].mayoria_edad,
                  'padre': this.esposo[0].padre,
                  'madre': this.esposo[0].madre,
                  'hora': this.esposo[0].hora,
                  'fecha_nacimiento': this.esposo[0].fecha_nacimiento,
                  'hospital': this.esposo[0].hospital,
                  'sexo': this.esposo[0].sexo,
                  'estado_civil': 'Casado'
                }
                console.log(datosEsposo);
                this.nacimientoService.actualizarPersona(datosEsposo, this.esposo[0].id).subscribe(
                  resultado => {
                   location.href = '/matrimonio';
                  },
                  error => {
                    console.log(error);
                  }
                )
              }, error => {
                console.log(error);
              }
            )
          }, error => {
            console.log(error);
          })
        }
      );
    },
      error => {
        console.log(error);
      })
  }

}
