import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../service/producto.service';
import { FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

	producto : any = {nombre:'', descripcion:''}
  productos: any;
  public regForm: FormGroup;
  submitted = false;

  constructor(private productoService: ProductoService) {
    this.obtenerProductos();
  }

  ngOnInit(): void {
    this.regForm= new FormGroup({
      nombre: new FormControl('', Validators.required),
     descripcion: new FormControl('', Validators.required)
    })
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
    this.producto.nombre = this.regForm.value.nombre;
    this.producto.descripcion = this.regForm.value.descripcion;
  	this.productoService.agregarProducto(this.producto).subscribe( resultado =>{
      this.obtenerProductos();
    },
    error =>{
      console.log(JSON.stringify(error))
    });
  }

}
