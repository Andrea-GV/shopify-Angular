import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { GestionComponent } from './components/gestion/gestion.component';
import { EditarProdsComponent } from './components/editar-prods/editar-prods.component';
import { FormLoginComponent } from './components/user-login/user-login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { authGuard } from './core/guards/auth.guards.';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productos', component: ProductsComponent },
  { path: 'gestion', component: GestionComponent, canActivate: [authGuard]},
  { path: 'gestion/:productId', component: EditarProdsComponent, canActivate: [authGuard]},
  { path: 'login', component: FormLoginComponent },
  { path: 'registro', component: UserRegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
