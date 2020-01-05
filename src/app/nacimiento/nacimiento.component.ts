import { Component, OnInit } from '@angular/core';
import { NacimientoService } from '../servicio/nacimiento.service';

@Component({
  selector: 'app-nacimiento',
  templateUrl: './nacimiento.component.html',
  styleUrls: ['./nacimiento.component.css']
})
export class NacimientoComponent implements OnInit {

  
  nacimientos: any;
  constructor(private NacimientoService: NacimientoService) { 
    this.obtenerNacimientos();
  }

  obtenerNacimientos(){
    this.NacimientoService.ObtenerTodosLosNacimientos().subscribe(resultado => {
      this.nacimientos = resultado;
      console.log(this.nacimientos);
    },
    error=>{
          console.log(error);
    });
  }

  ngOnInit() {
  }

  

  eliminarNacimiento(identificador){
    this.NacimientoService.eliminarPersona(identificador).subscribe(resultado => {
      this.obtenerNacimientos();
    }, 
    error => {
      console.log(error);
    });
  }

}
