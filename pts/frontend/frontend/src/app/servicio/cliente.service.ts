import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../modelo/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/clientes/`
  constructor(
    private http:HttpClient
  ) { }
  
  getAllCliente(){
    return this.http
    .get<Cliente[]>(this.base_path)
  }
  postCliente(clienteData: any): Observable<any>{
    return this.http
    .post( this.base_path,clienteData)

  }
}
