import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DefuncionService {

  constructor(private httpClient: HttpClient) { }

  ObtenerTodasLasDefunciones():Observable<any>{
    return this.httpClient.get("/defunciones");
  }

  ObtenerUnaDefuncion(item):Observable<any>{
    return this.httpClient.get("/defunciones/" +item);
  }

  agregarDefuncion(defuncion: any){
    let json = JSON.stringify(defuncion);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.httpClient.post("/defunciones", json, {headers: headers})
  }

  obtenerDefuncionNombres(busqueda: any):Observable<any>{
      return this.httpClient.get("/defunciones/buscarDefuncion/"+ busqueda.primer_nombre + "/" + busqueda.segundo_nombre +"/" + busqueda.primer_apellido + "/" + busqueda.segundo_apellido);
  }

  obtenerNacimientoNombres(busqueda: any):Observable<any>{
    console.log(busqueda.primer_nombre);
      return this.httpClient.get("/nacimientos/buscarNombres/"+ busqueda.primer_nombre + "/" + busqueda.segundo_nombre +"/" + busqueda.primer_apellido + "/" + busqueda.segundo_apellido);
  }
}
