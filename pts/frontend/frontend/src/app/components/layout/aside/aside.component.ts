import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  opc: MenuItem[] = [];
  ngOnInit(): void {
    this.opc = [
      {
        label: 'Clientes',
        icon: 'pi pi-fw pi-users',
        routerLink: '/clientes',
        items: [
          {
            label: 'Crear clientes',
            icon: 'pi pi-user-plus',
            routerLink: '/crearcliente'
          },
          {
            label: 'Mostrar clientes',
            icon: 'pi pi-users',
            routerLink: '/mostrarcliente'
          },
          {
            label: 'Actualizar clientes',
            icon: 'pi pi-user-edit',
            routerLink: '/actualizarcliente'
          },
          {
            label: 'Eliminar clientes',
            icon: 'pi pi-user-minus',
            routerLink: '/eliminarcliente'
          },
        
        ]
      },
      {
        label: 'Tipo Productos',
        icon: 'pi pi-fw pi-users',
        routerLink: '/tipoProductos',
        items: [
          {
            label: 'Crear tipo productos',
            icon: 'pi pi-user-plus',
            routerLink: '/creartipoproducto',
          },
          {
            label: 'Mostrar tipo productos',
            icon: 'pi pi-users',
            routerLink: '/mostrartipoproducto',
          },
          {
            label: 'Actualizar tipo productos',
            icon: 'pi pi-user-edit',
            routerLink: '/actualizartipoproducto',
          },
          {
            label: 'Eliminar tipo productos',
            icon: 'pi pi-user-minus',
            routerLink: '/eliminartipoproducto',
          }
        ]
      },
      {
        label: 'Productos',
        icon: 'pi pi-fw pi-users',
        routerLink: '/productos',
        items: [

          {
          label: 'Crear productos',
          icon: 'pi pi-fw pi-users',
          routerLink: '/crearproducto',
          },
          {
          label: 'Mostar productos',
          icon: 'pi pi-fw pi-users',
          routerLink: '/mostrarproducto',
          },
          {
          label: 'Actualizar productos',
          icon: 'pi pi-fw pi-users',
          routerLink: '/actualizarproducto',
          },
          {
          label: 'Eliminar productos',
          icon: 'pi pi-fw pi-users',
          routerLink: 'eliminarproducto',
          }
        ]

      },
      {
        label: 'Ventas',
        icon: 'pi pi-fw pi-users',
        routerLink: '/ventas',
        items: [

          {
            label: 'Crear ventas',
            icon: 'pi pi-fw pi-users',
            routerLink: '/crearventas',
          },
          {
            label: 'Mostrar ventas',
            icon: 'pi pi-fw pi-users',
            routerLink: '/mostrarventas',
          },
          {
            label: 'Actualizar ventas',
            icon: 'pi pi-fw pi-users',
            routerLink: '/actualizarventas',
          },
          {
            label: 'Eliminar ventas',
            icon: 'pi pi-fw pi-users',
            routerLink: '/eliminarventas',
          }

        ]
      }
    ]
  }
}
