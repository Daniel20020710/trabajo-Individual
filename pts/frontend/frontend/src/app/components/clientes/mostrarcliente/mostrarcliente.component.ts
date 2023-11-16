import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelo/cliente';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/servicio/cliente.service';

@Component({
  selector: 'app-mostrarcliente',
  templateUrl: './mostrarcliente.component.html',
  styleUrls: ['./mostrarcliente.component.css']
})
export class MostrarclienteComponent implements OnInit {
  public client: Cliente[] = []
  public displayedColumns: string[] = ["id", " nombre ", "direccion", " telefono", "correo ", "password"]
  constructor(
    private clientesService: ClienteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mostrarCliente();
  }
  mostrarCliente() {
    this.clientesService.getAllCliente()
      .subscribe((clientes: Cliente[]) => {
        this.client = clientes;
        console.log(this.client);
      });
  }


}
