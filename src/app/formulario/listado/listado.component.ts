import { Component, OnInit } from '@angular/core';
import { Usuario } from '../interface/empleado';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  usuarios: Usuario[] = [];

  ngOnInit() {
    // Obtener usuarios desde localStorage al inicializar el componente
    const storedUsuarios = localStorage.getItem('usuarios');
    if (storedUsuarios) {
      this.usuarios = JSON.parse(storedUsuarios);
    }
  }

  onUsuarioAgregado(agregado: boolean) {
    if (agregado) {
      // Actualizar la lista de usuarios después de que se agrega uno nuevo
      const storedUsuarios = localStorage.getItem('usuarios');
      if (storedUsuarios) {
        this.usuarios = JSON.parse(storedUsuarios);
      }
    }
  }

}
