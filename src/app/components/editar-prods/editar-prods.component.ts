import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { Product } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-editar-prods',
  templateUrl: './editar-prods.component.html',
  styleUrls: ['./editar-prods.component.scss']
})
export class EditarProdsComponent {
  // Formato de formularios
  formulario: FormGroup;
  productId: string = '';

  arrProductos: Product[] = [];

  // Traemos el servicio, el constructor de formulario y el router
  productosService = inject(ProductosService);
  formBuilder = inject(FormBuilder);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  // Esto es la plantilla del producto en el formulario
  constructor() {
    this.formulario = this.formBuilder.group({
      name: [],
      price: [],
      description: [],
      stars: [],
      image: []
    })
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      // params['productoId']
      this.productId = params['productoId'];
      const response = await this.productosService.getById(params['productoId']);
      const { Producto } = response;
      // Rellenar el formulario
      this.formulario.setValue({ Producto });
    });
  }

  async onSubmit() {
    const response = await this.productosService.updateById(this.productId, this.formulario.value);
    console.log(response);
  }
}
