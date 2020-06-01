import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoComponent } from './producto/producto.component';
import { ProductoService } from './service/producto.service'; 

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MovimientoComponent } from './movimiento/movimiento.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    MovimientoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
