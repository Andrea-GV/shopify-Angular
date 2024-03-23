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

  getAllObs() { //Vamos a crear 2 funciones para probar uno con OBSERVABLE
    // Lanzamos la petición y devuelve un observable
    return this.httpClient.get<GetResponse>('https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/products')
  }

  getAllProm() {
    // Convertimos el observable en promesa 
    return firstValueFrom(
      this.httpClient.get<GetResponse>('https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/products')
    )
    // nos devuelve <GetResponse> que es la interfaz q hemos creado, y la hemos convertido en un TIPO DINÁMICO
  }

  
  // Para crear productos a través de POST hacemos el siguiente método
  // Como vamos a trabajar con promesa, hacemos como antes con el return
  create(producto: Product) {
    return firstValueFrom(
      // aquí le damos las instrucciones q pide la api para hacer el POST del usuario
      this.httpClient.post<Product>('https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/products', producto)
    );
  }
}
