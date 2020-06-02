import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../service/producto.service';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

	producto : any = {nombre:'', descripcion:''}
  productos: any;

  constructor(private productoService: ProductoService) {
    this.obtenerProductos();
  }

  ngOnInit(): void {
  }

  obtenerProductos(){
    this.productoService.obtenerProductos().subscribe( resultado =>{
      this.productos = resultado.productos;
    },
    error =>{
      console.error('Holaaaa' + JSON.stringify(error));
    });
  }

  agregarProducto(){
  	this.productoService.agregarProducto(this.producto).subscribe( resultado =>{
      this.obtenerProductos();
    },
    error =>{
      console.log(JSON.stringify(error))
    });
  }

}
