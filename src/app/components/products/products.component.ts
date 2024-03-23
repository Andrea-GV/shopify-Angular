import { ProductosService } from './../../services/productos.service';
import { Component, inject } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  arrProductos: any;

  productosService = inject(ProductosService);

  async ngOnInit() {
    const response = await this.productosService.getAllProm();
    this.arrProductos = response;
  }
}
