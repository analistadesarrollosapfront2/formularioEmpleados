export interface Usuario {
  nombre: string;
  correo: string;
  telefono: string;
  fechaNacimiento: Date;
  genero: 'Masculino' | 'Femenino' | '';
}
