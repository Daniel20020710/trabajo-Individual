import { Component, OnInit } from '@angular/core';
import { VentasService } from 'src/app/service4/ventas.service';
import { ventas } from 'src/app/modelo/ventas';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mostrarventas',
  templateUrl: './mostrarventas.component.html',
  styleUrls: ['./mostrarventas.component.css']
})
export class MostrarventasComponent implements OnInit{

  public venta: ventas[] = []
  public displayedColumns: string[] = ["id", "fecha ", "descuento", " total", "subtotal "]
  constructor(
    private ventaService: VentasService,
    private router: Router
  ) { }
  mostrarVentas() {
    this.ventaService.getAllVentas()
      .subscribe((venta: ventas[]) => {
        this.venta = venta;
        console.log(this.venta);
      });
  }

  ngOnInit(): void {
    this.mostrarVentas();
  }

}
