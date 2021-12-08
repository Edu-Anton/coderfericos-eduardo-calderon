# Coderféricos: e-commerce hecho con ReactJS
_ _ _

Proyecto realizado para el curso de ReactJS en Coderhouse, con el profesor Federico Osandon. 

Link: https://coderfericos.netlify.app/

## App Coderféricos

El proyecto está referido a una app de comercio electrónico, específicamente para una tienda de computo. Las vistas y sus funcionalidades principales son:

* Listado de productos: los productos pueden ser presentado en formato de grillas o horizontalmente. Adicionalmente pueden ser filtrados por categorías y marcas.
* Presentación individual: si un producto es elegido, se direcciona a una vista individual con información detallada. Desde ese punto puede escoger añadir el producto al carrito de compras y la cantidad.
* Carrito de compras: en esta vista se listan los productos elegidos para la compra junto con sus respectivas cantidades. El usuario puede eliminar uno o todos los productos del carrito, y puede modificar las cantidades seleccionadas. Así mismo recibe información del monto de la compra.
* Registro de comprador: mediante formaluario se obtienden los datos del comprador (nombre, email y teléfono). Si se completan los datos de forma satisfactoria pueden continuar el proceso de compra (botón continuar con el pago) y se presenta una ventana modal que simula una pasarela de pago. Finalmente puede realizar el pago y se completa el proceso de compra.
* Orden recibida: muestra el detalle de la compra con los datos del usuario y los productos correspondientes al pago además del total. 

## Tecnologías empleadas

#### React
Para el renderizado de vistas
#### React-Router
Para la gestión de la navegación y uso de parámetros. 
#### Firebase
En su módulo Firestore para la gestión de la data
#### Bootstrap
Como libreria de componentes y sistema de grillas para el diseño del layout.  

## Instalación
Ubicación del repositorio: https://github.com/Edu-Anton/coderfericos-eduardo-calderon.git

* Descargar el repositorio de la dirección indicada
* En la carpeta mayor del proyecto, mediante consola ejecutar los comandos
  * npm install
  * npm start

Para verlo en el navegador (modo desarrollo): http://localhost:3000
