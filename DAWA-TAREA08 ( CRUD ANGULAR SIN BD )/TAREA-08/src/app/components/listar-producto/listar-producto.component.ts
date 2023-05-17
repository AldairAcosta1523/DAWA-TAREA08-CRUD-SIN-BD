import { Component} from '@angular/core';
import { ProductoService } from '../../services/productos.service';
import { Producto } from 'src/models/producto';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})

export class ListarProductoComponent {
  productos: Producto[] = [];
  productoSeleccionado: Producto | undefined;

  constructor(private productoService: ProductoService) {
    this.productos = this.productoService.obtenerProductos();
  }

  obtenerProductos() {
    this.productos = this.productoService.obtenerProductos();
  }

  editarProducto(producto: Producto) {
    this.productoSeleccionado = producto;
  }  

  borrarProducto(index: number) {
    this.productos.splice(index, 1);
  }
}
