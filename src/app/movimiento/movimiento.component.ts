import { Component, OnInit } from '@angular/core';
import { MovimientoService } from '../service/movimiento.service';
import { ProductoService } from '../service/producto.service';


import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-movimiento',
  templateUrl: './movimiento.component.html',
  styleUrls: ['./movimiento.component.css']
})
export class MovimientoComponent implements OnInit {

    form = new FormGroup({
      cantidad : new FormControl('', Validators.required),
      idProducto: new FormControl('', Validators.required),
      tipo: new FormControl('', Validators.required)
    })

    producto : any = {id:Number, nombre:''}
    idProducto: Number;
	  movimiento : any = {cantidad:'', tipo: '', producto:this.producto}
  	productos: any;

  constructor(private movimientoService: MovimientoService, private productoService: ProductoService) {
  	this.obtenerProductos();
  }

  ngOnInit(): void {
  }

  obtenerProductos(){
    this.productoService.obtenerProductos().subscribe( resultado =>{
      this.productos = resultado;
    },
    error =>{
      console.error('Holaaaa' + JSON.stringify(error));
    });
  }

  registrarMovimiento(){
    this.producto.id = this.idProducto;
    this.producto.nombre = this.idProducto;
    this.movimiento.producto = this.producto;
    console.log('idProducto '+this.idProducto);
    console.log('producto '+this.movimiento.producto.id);
    this.movimientoService.registrarMovimiento(this.movimiento).subscribe( resultado =>{
       console.log('registrado');
    },error =>{
      console.log(JSON.stringify(error));
    });
  }
 

}
