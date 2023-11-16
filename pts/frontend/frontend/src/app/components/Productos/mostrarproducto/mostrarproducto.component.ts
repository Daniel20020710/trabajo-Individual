import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/service3/producto.service';
import { productos } from 'src/app/modelo/producto';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mostrarproducto',
  templateUrl: './mostrarproducto.component.html',
  styleUrls: ['./mostrarproducto.component.css']
})
export class MostrarproductoComponent implements OnInit{


  public producto: productos[] = []
  public displayedColumns: string[] = ["id", " nombre ", "marca", " precio", "stockmin ", "cantidad"]
  constructor(
    private productoService: ProductoService,
    private router: Router
  ) { }

 
  mostrarProductos() {
    this.productoService.getAllProducto()
      .subscribe((producto: productos[]) => {
        this.producto = producto;
        console.log(this.producto);
      });
  }
  ngOnInit(): void {
    this.mostrarProductos();
  }


}
