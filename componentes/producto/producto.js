import { eliminarProducto } from "../../src/productData.js";
import { renderProductos } from "../productos/productos.js";

export function Producto({ id, nombreProducto, cantidad, precio }) {
  const productoRow = document.createElement('tr');
  const total = cantidad * precio;

  productoRow.innerHTML = `
    <td>${nombreProducto}</td>
    <td>${cantidad}</td>
    <td>Q${precio.toFixed(2)}</td>
    <td>Q${total.toFixed(2)}</td>
    <td><button class="eliminar">x</button></td>
  `;

  productoRow.querySelector('.eliminar').addEventListener('click', () => {
    eliminarProducto(id);
    renderProductos(); // Actualiza la lista de productos
  });

  return productoRow;
}
