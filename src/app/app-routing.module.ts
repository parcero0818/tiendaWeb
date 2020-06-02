import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovimientoComponent } from './movimiento/movimiento.component';
import { ProductoComponent } from './producto/producto.component';

const routes: Routes = [
	{path: 'movimientos', component: MovimientoComponent},
	{path: '', component: ProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MovimientoComponent, ProductoComponent]
