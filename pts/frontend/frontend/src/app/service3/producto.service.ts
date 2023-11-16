import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { productos } from '../modelo/producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/productos/productos/`
  constructor(
    private http:HttpClient
  ) { }

  getAllProducto(){
    return this.http
    .get<productos[]>(this.base_path)
  }
  postProducto(productoData: any): Observable<any>{
    return this.http
    .post( this.base_path,productoData)

  }

  
}
