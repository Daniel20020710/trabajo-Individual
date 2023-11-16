import { Component } from '@angular/core';
import { TipoproductoService } from 'src/app/service/tipoproducto.service';
import { tipoProducto } from 'src/app/modelo/tipoProducto';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-creartipoproducto',
  templateUrl: './creartipoproducto.component.html',
  styleUrls: ['./creartipoproducto.component.css']
})
export class CreartipoproductoComponent {
  public mostrar: tipoProducto[] = []
  public displayedColumns: string[] = ["id", " nombre "]
  constructor(
    private tipoService: TipoproductoService,
    private router: Router
  ) { }
  
  userForm=new FormGroup({
    nombre:new FormControl('',Validators.required),
  })
 
  onSubmit(){
    const formdata=this.userForm.value;
    this.tipoService.postTipoproducto(formdata).subscribe(
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

  mostrartipoproducto() {
    this.tipoService.getAlltipoproducto()
      .subscribe((tipoproducto: tipoProducto[]) => {
        this.mostrar = tipoproducto;
        console.log(this.mostrar);
      });
  }

  ngOnInit(): void {
    this.mostrartipoproducto();
  }
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }
}
