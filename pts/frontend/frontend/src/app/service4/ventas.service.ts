import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ventas } from '../modelo/ventas';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VentasService {
  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/ventas/`
  constructor(
    private http:HttpClient
  ) { }
 getAllVentas(){
    return this.http
    .get<ventas[]>(this.base_path)
  }
  postVentas(ventaData: any): Observable<any>{
    return this.http
    .post( this.base_path,ventaData)

  }

}

