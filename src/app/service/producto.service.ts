import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private httpClient: HttpClient) { }

  obtenerProductos(): Observable<any>{
  	return this.httpClient.get("http://localhost:2001/tienda/productos/getProductos");
  }

  agregarProducto(producto: any): Observable<any>{
  	let json = JSON.stringify(producto);
  	let headers = new HttpHeaders().set('Content-type', 'application/json');

  	return this.httpClient.post("http://localhost:2001/tienda/productos/registrarProducto", json, {headers: headers})
  }
}
