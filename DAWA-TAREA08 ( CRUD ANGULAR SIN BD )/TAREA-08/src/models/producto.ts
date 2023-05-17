export class Producto {
    codigo: string;
    nombre: string
    descripcion: string;
    precio: number;
  
    constructor(codigo: string, nombre: string, descripcion: string, precio: number) {
      this.codigo = codigo;
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.precio = precio;
    }
  }
  