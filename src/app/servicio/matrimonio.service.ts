import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable()
export class MatrimonioService {

  constructor(private httpClient: HttpClient) { }

  obtenerMatrimonios():Observable<any>{
    return this.httpClient.get("/matrimonios");
  }
}
