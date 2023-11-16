import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearclienteComponent } from './components/clientes/crearcliente/crearcliente.component';
import { MostrarclienteComponent } from './components/clientes/mostrarcliente/mostrarcliente.component';
import { ActualizarclienteComponent } from './components/clientes/actualizarcliente/actualizarcliente.component';
import { EliminarclienteComponent } from './components/clientes/eliminarcliente/eliminarcliente.component';
import { CreartipoproductoComponent } from './components/tipoProductos/creartipoproducto/creartipoproducto.component';
import { MostrartipoproductoComponent } from './components/tipoProductos/mostrartipoproducto/mostrartipoproducto.component';
import { ActualizartipoproductoComponent } from './components/tipoProductos/actualizartipoproducto/actualizartipoproducto.component';
import { EliminartipoproductoComponent } from './components/tipoProductos/eliminartipoproducto/eliminartipoproducto.component';
import { CrearproductoComponent } from './components/Productos/crearproducto/crearproducto.component';
import { EliminarproductoComponent } from './components/Productos/eliminarproducto/eliminarproducto.component';
import { ActualizarproductoComponent } from './components/Productos/actualizarproducto/actualizarproducto.component';
import { MostrarproductoComponent } from './components/Productos/mostrarproducto/mostrarproducto.component';
import { CrearventasComponent } from './components/ventas/crearventas/crearventas.component';
import { MostrarventasComponent } from './components/ventas/mostrarventas/mostrarventas.component';
import { EliminarventasComponent } from './components/ventas/eliminarventas/eliminarventas.component';
import { ActualizarventasComponent } from './components/ventas/actualizarventas/actualizarventas.component';


const routes: Routes = [
 {
  path: 'crearcliente',
  component: CrearclienteComponent
 },
 {
  path:'mostrarcliente',
  component: MostrarclienteComponent
 },
 {
  path: 'actualizarcliente',
  component: ActualizarclienteComponent
 },
 {
  path: 'eliminarcliente',
  component: EliminarclienteComponent
 },

 {
 path: 'creartipoproducto',
  component: CreartipoproductoComponent
 },
 {
  path:'mostrartipoproducto',
  component: MostrartipoproductoComponent
 },
 {
  path: 'actualizartipoproducto',
  component: ActualizartipoproductoComponent
 },
{
  path: 'eliminartipoproducto',
  component: EliminartipoproductoComponent
},
{
  path: 'crearproducto',
  component: CrearproductoComponent
},
{
  path: 'eliminarproducto',
  component: EliminarproductoComponent
},
{
  path: 'actualizarproducto',
  component: ActualizarproductoComponent
},
{
  path:'mostrarproducto',
  component: MostrarproductoComponent
},
{
  path: 'crearventas',
  component: CrearventasComponent
},
{
  path:'mostrarventas',
  component: MostrarventasComponent
},
{
  path: 'eliminarventas',
  component: EliminarventasComponent
},
{
  path: 'actualizarventas',
  component: ActualizarventasComponent
}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
