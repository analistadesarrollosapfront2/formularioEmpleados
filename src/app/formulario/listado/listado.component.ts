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
    this.actualizarUsuarios();
  }

  actualizarUsuarios() {
    const storedUsuarios = localStorage.getItem('usuarios');
    if (storedUsuarios) {
      this.usuarios = JSON.parse(storedUsuarios);
    }
    localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
  }

  eliminarUsuario(index: number) {
    this.usuarios.splice(index, 1);
    localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
  }

}
