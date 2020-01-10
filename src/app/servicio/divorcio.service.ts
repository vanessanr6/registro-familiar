import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DivorcioService {

  constructor(private httpClient: HttpClient) { }

  obtenerDivorcios():Observable<any>{
    return this.httpClient.get("/divorcios");
  }

  agregarDivorcio(divorcio: any) {
    let json = JSON.stringify(divorcio);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post("/divorcios", json, {headers: headers});
  }

  
  obtenerUnDivorcio(item):Observable<any>{
    return this.httpClient.get("/divorcios/"+item);
  }

  obtenerDivorcioPorNombre(primer_nombre, segundo_nombre, primer_apellido, segundo_apellido):Observable<any>{
    return this.httpClient.get("/divorcios/"+primer_nombre+"/"+segundo_nombre+"/"+primer_apellido+"/"+segundo_apellido);
  }
}
