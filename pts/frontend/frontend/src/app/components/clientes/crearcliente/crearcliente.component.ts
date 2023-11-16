import { Component, OnInit} from '@angular/core';
import { ClienteService } from 'src/app/servicio/cliente.service';
import { Cliente } from 'src/app/modelo/cliente';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crearcliente',
  templateUrl: './crearcliente.component.html',
  styleUrls: ['./crearcliente.component.css']
})
export class CrearclienteComponent implements OnInit {

  public client: Cliente[] = []
  public displayedColumns: string[] = ["id", " nombre ", "direccion", " telefono", "correo ", "password"]
  constructor(
    private clientesService: ClienteService,
    private router: Router
  ) { }
  userForm=new FormGroup({
    nombre:new FormControl('',Validators.required),
    direccion: new FormControl('',Validators.required),
    telefono: new FormControl(''),
    correo:new FormControl(''),
    password: new FormControl(''),
   
  })
  onSubmit(){
    const formdata=this.userForm.value;
    this.clientesService.postCliente(formdata).subscribe(
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

  mostrarCliente() {
    this.clientesService.getAllCliente()
      .subscribe((clientes: Cliente[]) => {
        this.client = clientes;
        console.log(this.client);
      });
  }

  ngOnInit(): void {
    this.mostrarCliente
  }
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }
 
}
