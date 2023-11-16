import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { ContentComponent } from './components/layout/content/content.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { AsideComponent } from './components/layout/aside/aside.component';
import {MenubarModule} from 'primeng/menubar';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelMenuModule } from 'primeng/panelmenu';
import { CrearclienteComponent } from './components/clientes/crearcliente/crearcliente.component';
import { MostrarclienteComponent } from './components/clientes/mostrarcliente/mostrarcliente.component';
import { ActualizarclienteComponent } from './components/clientes/actualizarcliente/actualizarcliente.component';
import { EliminarclienteComponent } from './components/clientes/eliminarcliente/eliminarcliente.component';
import { CreartipoproductoComponent } from './components/tipoProductos/creartipoproducto/creartipoproducto.component';
import { MostrartipoproductoComponent } from './components/tipoProductos/mostrartipoproducto/mostrartipoproducto.component';
import { ActualizartipoproductoComponent } from './components/tipoProductos/actualizartipoproducto/actualizartipoproducto.component';
import { EliminartipoproductoComponent } from './components/tipoProductos/eliminartipoproducto/eliminartipoproducto.component';
import { EliminarproductoComponent } from './components/Productos/eliminarproducto/eliminarproducto.component';
import { CrearproductoComponent } from './components/Productos/crearproducto/crearproducto.component';
import { ActualizarproductoComponent } from './components/Productos/actualizarproducto/actualizarproducto.component';
import { MostrarproductoComponent } from './components/Productos/mostrarproducto/mostrarproducto.component';
import { MostrarventasComponent } from './components/ventas/mostrarventas/mostrarventas.component';
import { CrearventasComponent } from './components/ventas/crearventas/crearventas.component';
import { ActualizarventasComponent } from './components/ventas/actualizarventas/actualizarventas.component';
import { EliminarventasComponent } from './components/ventas/eliminarventas/eliminarventas.component';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    AsideComponent,
    CrearclienteComponent,
    MostrarclienteComponent,
    ActualizarclienteComponent,
    EliminarclienteComponent,
    CreartipoproductoComponent,
    MostrartipoproductoComponent,
    ActualizartipoproductoComponent,
    EliminartipoproductoComponent,
    EliminarproductoComponent,
    CrearproductoComponent,
    ActualizarproductoComponent,
    MostrarproductoComponent,
    MostrarventasComponent,
    CrearventasComponent,
    ActualizarventasComponent,
    EliminarventasComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    BrowserAnimationsModule,
    PanelMenuModule,
    TableModule,
    HttpClientModule,
    ButtonModule,
    DialogModule,
    ReactiveFormsModule,
    PaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
