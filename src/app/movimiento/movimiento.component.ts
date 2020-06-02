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
	  movimiento : any = {cantidad:'', tipo: '', producto:this.producto}
  	productos: any;
    idProducto: Number;
    regForm: FormGroup;
    tipo: any;

  constructor(private movimientoService: MovimientoService, private productoService: ProductoService) {
  	this.obtenerProductos();
  }

  ngOnInit(): void {
    this.regForm = new FormGroup({
      idProducto: new FormControl('', Validators.required),
      tipo: new FormControl('', Validators.required),
      cantidad: new FormControl('', Validators.required)
    })
  }

  obtenerProductos(){
    this.productoService.obtenerProductos().subscribe( resultado =>{
      this.productos = resultado.productos;
      this.idProducto = this.productos[0].id;
      this.tipo = "Compra";
    },
    error =>{
      console.error('Holaaaa' + JSON.stringify(error));
    });
  }

  registrarMovimiento(){
    console.log(this.regForm.value);
    this.movimiento.tipo = this.regForm.value.tipo;
    this.movimiento.cantidad = this.regForm.value.cantidad;
    this.idProducto = this.regForm.value.idProducto;
    this.producto.id = this.idProducto;
    this.movimiento.producto = this.producto;
    this.movimientoService.registrarMovimiento(this.movimiento).subscribe( resultado =>{
      if(resultado.estado == 100){
        alert(resultado.mensaje);
      }else if(resultado.estado ==200){
        this.regForm.reset;
        alert('Registro Exitoso');
      }
    },error =>{
      console.log(JSON.stringify(error));
    });
  }
 

}
