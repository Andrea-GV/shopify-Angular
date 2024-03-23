import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { GestionComponent } from './components/gestion/gestion.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productos', component: ProductsComponent },
  { path: 'gestion', component: GestionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
