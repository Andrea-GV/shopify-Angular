import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  // Por defecto, siempre caerá en Home
  seccionActual: string = 'Home';

  constructor(private router: Router) {
    
  }
  @Input() nav: string = '';

  // para crear las opciones en función del routing
  nav1: string = 'Home';
  nav2: string = 'Prods';
  nav3: string = 'Gestion';

  ngOnInput() {
    this.nav = '';
  }
  
  // pero creo q no lo he aplicado
  cambiarSeccion(nav: string) {
    // console.log('antes',this.router.url);
    
    this.seccionActual = nav;
    // console.log('después',this.router.url);
  }
}
