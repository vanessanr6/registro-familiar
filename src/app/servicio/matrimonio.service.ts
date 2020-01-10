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
}
