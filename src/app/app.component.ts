import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Cambiado styleUrl a styleUrls
})

export class AppComponent {
  title = 'formulario-empleados';

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
        {
          label: 'Home',
          icon: 'pi pi-home',
          routerLink: '/'
        },
        {
          label: 'products',
          icon: 'pi pi-shopping-cart',
          routerLink: '/products'
      },
      {
          label: 'contact',
          icon: 'pi pi-envelope',
          routerLink: '/contact'
    }
      ]
}
}
