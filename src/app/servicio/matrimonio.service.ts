import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable()
export class MatrimonioService {

  constructor(private httpClient: HttpClient) { }

  obtenerMatrimonios():Observable<any>{
    return this.httpClient.get("/matrimonios");
  }

  agregarMatrimonio(matrimonio: any) {
    let json = JSON.stringify(matrimonio);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post("/matrimonios", json, {headers: headers});
  }

  obtenerMatrimonioPorNombre(primer_nombre, segundo_nombre, primer_apellido, segundo_apellido):Observable<any>{
    return this.httpClient.get("/matrimonios/"+primer_nombre+"/"+segundo_nombre+"/"+primer_apellido+"/"+segundo_apellido);
  }

  obtenerUnMatrimonio(item):Observable<any>{
    return this.httpClient.get("/matrimonios/"+item);
  }

  obtenerMatrimonioPorEsposos(nombre1Esposo, nombre2Esposo, apellido1Esposo, apellido2Esposo, nombre1Esposa, nombre2Esposa, apellido1Esposa, apellido2Esposa):Observable<any>{
    return this.httpClient.get("/matrimonios/"+nombre1Esposo+"/"+nombre2Esposo+"/"+apellido1Esposo+"/"+apellido2Esposo+"/"+nombre1Esposa+"/"+nombre2Esposa+"/"+apellido1Esposa+"/"+apellido2Esposa);
  }

  actualizarMatrimonio(id: any, matrimonio: any): Observable<any> {
    let json = JSON.stringify(matrimonio)
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.httpClient.put("/matrimonios/"+id, json, {headers: headers});
  }

}
