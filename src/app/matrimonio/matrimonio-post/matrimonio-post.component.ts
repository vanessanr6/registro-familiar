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
  agregarMatrimonioRegistro: any = { nombre1Esposo: '', nombre2Esposo: '', apellido1Esposo: '', apellido2Esposo: '', nombre1Esposa: '', nombre2Esposa: '', apellido1Esposa: '', apellido2Esposa: '', fecha: '', idEsposo: '', idEsposa: '', libro: '', folio: '', departamento: '', vigente: true}

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
            'estado_civil': 'Casada'
          }
          
          this.nacimientoService.actualizarPersona(datosEsposa, this.esposa[0].id).subscribe( resultado => {
            this.nacimientoService.obtenerPersona(matrimonio.nombre1Esposo, matrimonio.nombre2Esposo, matrimonio.apellido1Esposo, matrimonio.apellido2Esposo).subscribe(
              resultado => {
                this.esposo = resultado;
    
                const datosEsposo = {
                  'id': this.esposo[0].id,
                  'primer_nombre': this.esposo[0].primer_nombre,
                  'segundo_nombre': this.esposo[0].segundo_nombre, 
                  'primer_apellido': this.esposo[0].primer_apellido,
                  'segundo_apellido': this.esposo[0].segundo_apellido,
                  'estado_civil': 'Casado'
                }
                console.log(datosEsposo);
                this.nacimientoService.actualizarPersona(datosEsposo, this.esposo[0].id).subscribe(
                  resultado => {},
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
      location.href = '/matrimonio';
    },
      error => {
        console.log(error);
      })
  }

}
