import { ProductosService } from '../../core/services/productos.service';
import { Component, EventEmitter, Output, Input, inject } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/interfaces/product.interface';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent {
  // Formato de formularios
  formulario: FormGroup;

  // Traemos el servicio, el constructor de formulario y el router
  productosService = inject(ProductosService);
  formBuilder = inject(FormBuilder);
  router = inject(Router);

  @Input() productos: Product[] = [];
  @Output() productoCreado: EventEmitter<Product> = new EventEmitter();

  arrProductos: Product[] = [];

  // Esto es para cuando cree el producto, lo resetee con estos valores
  nuevoProducto: Product = {
    id: 0,
    name: '',
    price: 0,
    description: '',
    stars: 0,
    image: '',
  }
  
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

  async onSubmit() {
  // Lo q yo cree en productoCreado recógemelo en nuevoProducto
    this.productoCreado.emit(this.nuevoProducto);
    // console.log(this.nuevoProducto);
    // const response = await this.productosService.create(this.formulario.value);
    console.log(this.formulario.value);
    
    // si el nuevo producto es correcto sale el alert correcto ..> sino, revisa
    if (this.nuevoProducto) {
      alert('Producto registrado correctamente');
      this.productosService.create(this.formulario.value);
      this.router.navigateByUrl('/productos')
    } else {
      alert('Revisa el error en el formulario')
    }

    // Le decimos que añada al array el producto creado
    this.arrProductos.push(this.nuevoProducto);
    // console.log(this.arrProductos);
    
    // una vez recogido, reinicia el nP para que no arrastre todo
    this.nuevoProducto = {id: 0, name:'', price: 0, description: '', stars: 0, image: ''}
  }
  updatePreview() {
    this.nuevoProducto = this.formulario.value;
  }
}

