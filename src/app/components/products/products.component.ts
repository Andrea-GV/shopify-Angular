import { ProductosService } from './../../services/productos.service';
import { Component, inject } from '@angular/core';
// import { Product } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  arrProductos: any;

  // para poder aplicarle los cambios a la valoración con estrellas creo la propiedad
  // selectedStar: number = 0;
 
  // y ahora la función que lo aplique      no lo consigo.... paaaaaso
  // selectStar(star: number) {
  //   this.selectedStar = star;
  // }

  productosService = inject(ProductosService);

  async ngOnInit() {
    const response = await this.productosService.getAllProm();
    this.arrProductos = response;

  }
}

  

