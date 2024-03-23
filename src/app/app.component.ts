import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  seccionActual: string = 'Home';

  @Input() nav: string = '';

  nav1: string = 'Home';
  nav2: string = 'Prods';
  nav3: string = 'Gestion';

  ngOnInput() {
    this.nav = '';
  }
  
  cambiarSeccion(nav: string) {
    this.seccionActual = nav;
  }
}
