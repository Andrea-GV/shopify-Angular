import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Product } from '../interfaces/product.interface'


type GetResponse = {

  Producto: Product[] // Creamos el interfaz Usuario para manejar esto mucho mejor que con un any[]   ---> Ver hoja de product.interface.ts para ver cómo lo he convertido
}

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  httpClient = inject(HttpClient)

  public productData = {
    id: 0,
    name: '',
    price: 0,
    description: '',
    stars: 0,
    image: '',
  };

  getAllObs() { //Vamos a crear 2 funciones para probar uno con OBSERVABLE
    // Lanzamos la petición y devuelve un observable
    return this.httpClient.get<GetResponse>('http://localhost:3000/products')
  }

  getAllProm() {
    // Convertimos el observable en promesa 
    return firstValueFrom(
      this.httpClient.get<GetResponse>('http://localhost:3000/products')
    )
    // nos devuelve <GetResponse> que es la interfaz q hemos creado, y la hemos convertido en un TIPO DINÁMICO
  }
  
  getById(productoId: string){
    return firstValueFrom(
      this.httpClient.get<GetResponse>(`http://localhost:3000/products/${productoId}`)
    )
  }
  // Para crear productos a través de POST hacemos el siguiente método
  // Como vamos a trabajar con promesa, hacemos como antes con el return
  create(producto: Product) {
    return firstValueFrom(
      // aquí le damos las instrucciones q pide la api para hacer el POST del usuario
      this.httpClient.post<Product>('http://localhost:3000/products', producto)
    );
  }
  update(producto: Product) {
    return this.httpClient.put<Product>('http://localhost:3000/products', producto)
  }

  updateById(productoId: string, editProduct: Product) {
    return firstValueFrom(
      this.httpClient.put(
        `http://localhost:3000/products/${productoId}`,
        editProduct)
    );
  }

  // deleteProd
}
