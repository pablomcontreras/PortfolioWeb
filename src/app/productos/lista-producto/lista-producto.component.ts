import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {

  productos: Producto[] = [];

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productoService.lista().subscribe(
      
      {next: data => { this.productos = data},
      error: err => { console.log(err) }}
      );
};

onDelete(id: any): void {
  if (confirm('¿Estás seguro?, esta acción no se puede deshacer')) {
    this.productoService.borrar(id).subscribe(data => {
      this.cargarProductos();
    });
  }
};
  
}