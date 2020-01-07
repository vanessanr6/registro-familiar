import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable()
export class NacimientoService {
  constructor(private httpClient: HttpClient) { }

  ObtenerTodosLosNacimientos():Observable<any>{
      return this.httpClient.get("/nacimientos");
      
  }

  obtenerNacimientoNombres(busqueda: any):Observable<any>{
    console.log(busqueda.primer_nombre);
      return this.httpClient.get("/nacimientos/buscarNombres/"+ busqueda.primer_nombre + "/" + busqueda.segundo_nombre +"/" + busqueda.primer_apellido + "/" + busqueda.segundo_apellido);
  }

  agregarNacimiento(nacimiento: any){
    let json = JSON.stringify(nacimiento);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.httpClient.post("/nacimientos", json, {headers: headers});
  }


  eliminarPersona(identificador): Observable<any>{
    return this.httpClient.delete("/nacimientos/" + identificador);
  }

}
