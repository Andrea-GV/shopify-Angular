import { Component, Input, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UsersService } from './core/services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  // Por defecto, siempre caerá en Home
  seccionActual: string = 'Home';

  constructor(
    private router: Router,
  ) { }
  @Input() nav: string = '';

  usersService = inject(UsersService);

  ngOnInit():void {
    // this.nav = '';
     this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.actualizarSeccionActual();
      }
    });
  }
 

  cambiarSeccion(opcion: string) {
    // console.log('antes',this.router.url);
    this.seccionActual = opcion;
    // console.log('después',this.router.url);
  }
  // Para hacer el logout
  onClickLogout() {
    localStorage.removeItem('token_crm');
    alert('Hasta pronto!')
    this.router.navigateByUrl('/login');
  }

  // Para que al hacer click cambie de sección, el routing y el click
  private actualizarSeccionActual() {
    const rutaActual = this.router.url;
    if (rutaActual === '/productos') {
      this.seccionActual = 'productos';
    } else if (rutaActual === '/gestion') {
      this.seccionActual = 'gestion';
    } else if (rutaActual === '/login') {
      this.seccionActual = 'login';
    }else if (rutaActual === '/logout') {
    this.seccionActual = 'logout';
    } else if (rutaActual === '/registro') {
      this.seccionActual = 'registro';
    } else {
      this.seccionActual = 'home';
    }
  }
}

