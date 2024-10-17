export let productos = [
    { id: 1, nombreProducto: 'Producto_1', cantidad: 1, precio: 100 },
    { id: 2, nombreProducto: 'Producto_2', cantidad: 2, precio: 50 }
  ];
  
  export function eliminarProducto(id) {
    productos = productos.filter((producto) => producto.id !== id);
  }
  