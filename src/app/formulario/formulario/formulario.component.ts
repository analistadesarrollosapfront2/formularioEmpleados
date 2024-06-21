import { Component, Output, EventEmitter } from '@angular/core';
import { Usuario } from '../interface/empleado';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output() usuarioAgregado: EventEmitter<boolean> = new EventEmitter<boolean>();

  usuario: Usuario = {
    nombre: '',
    correo: '',
    telefono: '',
    fechaNacimiento: new Date(),
    genero: ''
  };

  agregar() {
    // Obtén el valor actual del localStorage para la clave 'usuarios'
    const storedUsuarios = localStorage.getItem('usuarios');

    // Inicializa el array de usuarios, parseando si hay algo almacenado
    let usuarios: Usuario[] = storedUsuarios ? JSON.parse(storedUsuarios) : [];

    // Agrega el nuevo usuario al array
    usuarios.push(this.usuario);

    // Almacena el array actualizado en localStorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    // Emitir evento para notificar que se agregó un usuario
    this.usuarioAgregado.emit(true);

    // Limpiar el formulario después de agregar el usuario
    this.usuario = {
      nombre: '',
      correo: '',
      telefono: '',
      fechaNacimiento: new Date(),
      genero: ''
    };

    console.log("Usuario agregado:", this.usuario);
  }

}
