export class Post {
  id: number;
  nombre: string;
  descripcion: string;

  constructor(nombre: string, descripcion: string) {
    this.id = Math.random();
    this.nombre = nombre;
    this.descripcion = descripcion;
  }
}