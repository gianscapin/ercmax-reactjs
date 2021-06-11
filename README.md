# ErcMax Gaming

  Es un sitio web para la compra de productos de tecnología. Donde se puede armar presupuestos y armar la pc indicada para vos.
  
## Home
La página principal cuenta con la barra de navegación donde se puede ir a cualquier categoría de producto deseada, un carrousel con fotos y un listado de productos que se encuentran en oferta.

### Productos

Los productos se muestran en carta con una foto especificando el nombre y su precio. Para saber más del producto hay que clickear el botón `Ver detalles`.
 Al ver los detalles del producto, se redireccionará a la ruta `/products/:idProducto` que cuenta con un id único por cada producto.
 Se mostrarán los detalles del producto correspondiente a la categoría y se puede seleccionar la cantidad deseada para agregar al carrito. Si el producto tiene 5 unidades en stock, habrá opciones para agregar hasta 5. Si no hay unidades en stock el botón usado para agregarlo al carrito es reemplazado por un mensaje comunicando que no hay stock.
 
 ---
 ## Carrito
 Al agregar un item al carrito aparecerá en el `header` la imagen de un carrito y la cantidad de productos que hay dentro. Con clickear el carro vas a dirigirte a `/cart`.
 En la página habrá un listado en forma de tabla donde está especificado el nombre, la cantidad y el precio unitario y el footer de la tabla muestra el precio total. La tabla cuenta con funcionalidad de eliminar el producto si no se desea.
 En caso de limpiar el carro hay un botón, y si no hay más productos en la tabla se mostrará una alerta comunicando que no hay productos en el carrito.
 Si se desea continuar con la compra  se hace click en `Continuar compra`, en todo caso hay un botón para volver a la página inicial.

---
## Formulario
Al hacer click en `Continuar compra` se direcciona a `/formulario` donde se mostrará en la parte izquierda un formulario a completar con datos personales como el **nombre**, el **email** y el **número de teléfono** y del otro lado una listado en forma de tabla del resumen de la compra.
En caso de que los datos estén incompletos en el formulario o falten campos a completar al hacer click en `Confirmar compra` se mostrará una alerta donde se especifica que los datos son incorrectos.
Si tenés todos los datos completos y hacés click en el botón para confirmar la compra se agregarán los datos a nuestra base en Firebase y se actualizarán el stock de todos los productos.
A continuación se te mostrará el código de tu compra.
 

## Licencia

[MIT](https://choosealicense.com/licenses/mit/)