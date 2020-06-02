import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovimientoService {

  constructor(private httpClient: HttpClient) { }

  registrarMovimiento(movimiento: any){
  	let json = JSON.stringify(movimiento);
  	let headers = new HttpHeaders().set('Content-type', 'application/json');

  	return this.httpClient.post("http://localhost:2001/tienda/registrarMovimiento", json, {headers: headers})
  }
}
