import { Component, OnInit } from '@angular/core';
import { TipoproductoService } from 'src/app/service/tipoproducto.service';
import { tipoProducto } from 'src/app/modelo/tipoProducto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mostrartipoproducto',
  templateUrl: './mostrartipoproducto.component.html',
  styleUrls: ['./mostrartipoproducto.component.css']
})
export class MostrartipoproductoComponent implements OnInit{

  public mostrar: tipoProducto[] = []
  public displayedColumns: string[] = ["id", " nombre "]
  constructor(
    private tipoService: TipoproductoService,
    private router: Router
  ) { }

 
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


}
