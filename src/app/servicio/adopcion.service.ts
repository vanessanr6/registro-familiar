import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdopcionService {

  constructor(private httpClient: HttpClient) { }

  obtenerPersonaPorNombre(busqueda: any): Observable<any>{
    return this.httpClient.get("/nacimientos/buscarNombres/"+ busqueda.primer_nombre + "/" + busqueda.segundo_nombre +"/" + busqueda.primer_apellido + "/" + busqueda.segundo_apellido);
  }

}
