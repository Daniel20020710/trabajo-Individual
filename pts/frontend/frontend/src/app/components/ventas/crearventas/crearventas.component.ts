import { Component} from '@angular/core';
import { VentasService } from 'src/app/service4/ventas.service';
import { ventas } from 'src/app/modelo/ventas';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crearventas',
  templateUrl: './crearventas.component.html',
  styleUrls: ['./crearventas.component.css']
})
export class CrearventasComponent {
  public venta: ventas[] = []
  public displayedColumns: string[] = ["id", "fecha ", "descuento", " total", "subtotal"]
  constructor(
    private ventaService: VentasService,
    private router: Router
  ) { }
  userForm=new FormGroup({
    fecha:new FormControl('',Validators.required),
    descuento: new FormControl('',Validators.required),
    total: new FormControl(''),
    subtotal:new FormControl(''),
   
  })
  onSubmit(){
    const formdata=this.userForm.value;
    this.ventaService.postVentas(formdata).subscribe(
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
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }
}
