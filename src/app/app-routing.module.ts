import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { GestionComponent } from './components/gestion/gestion.component';
import { EditarProdsComponent } from './components/editar-prods/editar-prods.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productos', component: ProductsComponent },
  { path: 'gestion', component: GestionComponent },
  { path: 'gestion/:id', component: EditarProdsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
