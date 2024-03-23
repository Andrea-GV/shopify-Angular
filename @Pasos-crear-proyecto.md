# Proyecto 1

1. Crear el proyecto CON RUTAS
2. Analizar la API
   - Crear la interfaz para los productos
3. Definición de rutas y componentes
4. Maquetación de AppComponent.html
   - Header, routerOutlet, Footer

## Recuperación de productos

A partir de aquí: 5. Creación del servicio para manejar los productos

- Nos preguntamos, qué hace falta en nuestro proyecto para poder hacer peticiones HTTP?
- Dentro del servicio creamos la petición
- GET https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/products

6. Dentro del componente que muestra todos los productos, llamamos al método getAll y pintamos los productos

### Creación de productos

7. Creamos un método create que cumpla con el servicio
   - POST https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/products
   - En el body hay que pasarle todos los datos del producto
8. Dentro del componente para la creación del producto
   - Creamos un formulario
   - Cuando envío el formulario, ejecuto el método CREATE del servicio
