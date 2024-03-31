import { HttpClient } from '@angular/common/http';
import { ProductosService } from '../../core/services/productos.service';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/interfaces/product.interface';

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
  // productosService = inject(ProductosService);
  // formBuilder = inject(FormBuilder);
  // router = inject(Router);
  // activatedRoute = inject(ActivatedRoute);
  // Vale, pero mejor recogido todo en un único constructor con private para todos
  // Esto es la plantilla del producto en el formulario
  constructor(
    private productosService: ProductosService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient
  ) {
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
      this.productId = params['productId'];
      // loadProductData es para que carque en el preview los datos en tiempo real
      this.loadProductData(); 
      // Solicitamos el HTTP para obtener y arrastrar los datos del producto a editar
      this.httpClient.get<any>('http://localhost:3000/products/' + this.productId).subscribe(response => {
        const { name, price, description, stars, image } = response;
        // const response = await this.productosService.getById(this.productId);
        // const producto = response.Producto;
        // Rellenar el formulario
        this.formulario.patchValue({ name, price, description, stars, image });
      });
    }
  )
  }

  async onSubmit() {
    try {
      const response = await this.productosService.updateById(this.productId, this.formulario.value);
      console.log(response);
      // Que salga un alert de producto editado
      alert('Producto editado correctamente');
      // Redirigimos a la sección de productos una vez haya hecho click en editar
      this.router.navigate(['/productos']);
    } catch (error) {
      console.error('Error al actualizar el producto:', error);
    }
  }
    // Definir la función loadProductData para arrastrar los datos del producto en el formulario
    // loadProductData(product: Product) {
    //   this.formulario.patchValue({
    //     name: product.name,
    //     price: product.price,
    //     description: product.description,
    //     stars: product.stars,
    //     image: product.image
    //   });
    // }    Actualizada para poder hacer el preview
  async loadProductData() {
    try {
      const response = await this.httpClient.get<any>('http://localhost:3000/products/' + this.productId).toPromise();
      const { name, price, description, stars, image } = response;
      this.formulario.patchValue({ name, price, description, stars, image });
    } catch (error) {
      console.error('Error al cargar datos del producto:', error);
    }
  }
  }

