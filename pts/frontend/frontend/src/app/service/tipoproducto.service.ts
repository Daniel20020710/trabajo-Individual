import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tipoProducto } from '../modelo/tipoProducto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoproductoService {
  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/productos/tipo/`
  constructor(
    private http:HttpClient
  ) { }
  getAlltipoproducto(){
    return this.http
    .get<tipoProducto[]>(this.base_path)
  }
  postTipoproducto(tproductoData: any): Observable<any>{
    return this.http
    .post( this.base_path,tproductoData)

  }
}
