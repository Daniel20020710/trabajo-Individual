import { Component } from '@angular/core';
import { ProductoService } from 'src/app/service3/producto.service';
import { productos } from 'src/app/modelo/producto';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-crearproducto',
  templateUrl: './crearproducto.component.html',
  styleUrls: ['./crearproducto.component.css']
})
export class CrearproductoComponent {
  public producto: productos[] = []
  public displayedColumns: string[] = ["id", " nombre ", "marca", " precio", "stockmin ", "cantidad"]
  constructor(
    private productoService: ProductoService,
    private router: Router
  ) { }
  userForm=new FormGroup({
    nombre:new FormControl('',Validators.required),
    marca: new FormControl('',Validators.required),
    precio: new FormControl(''),
    stockmin:new FormControl(''),
    cantidad: new FormControl(''),
   
  })
  onSubmit(){
    const formdata=this.userForm.value;
    this.productoService.postProducto(formdata).subscribe(
      (response) => {
        console.log('Usuario created successfully:', response);
        this.userForm.reset();
        window.location.reload();
      },
      (error) => {
        console.error('Error creating usuario:', error);
      }
    );

  }
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
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }
}
