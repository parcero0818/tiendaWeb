import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoComponent } from './producto/producto.component';
import { ProductoService } from './service/producto.service'; 

import { HttpClientModule } from '@angular/common/http';
import { MovimientoComponent } from './movimiento/movimiento.component';
import { MovimientoService } from './service/movimiento.service';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    MovimientoComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ProductoService, MovimientoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
