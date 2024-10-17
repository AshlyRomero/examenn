import { productos } from "../../src/productData.js";
import { renderProductos } from "../productos/productos.js";

export function Formulario() {
  const form = document.createElement('form');
  form.className = 'formulario';

  form.innerHTML = `
    <label>Nombre Producto</label>
    <input type="text" id="nombreProducto" required />

    <label>Precio</label>
    <input type="number" id="precio" min="0" required />

    <label>Cantidad</label>
    <input type="number" id="cantidad" min="1" required />

    <button type="submit">Agregar</button>
  `;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombreProducto = form.nombreProducto.value;
    const precio = parseFloat(form.precio.value);
    const cantidad = parseInt(form.cantidad.value, 10);

    productos.push({
      id: productos.length + 1,
      nombreProducto,
      precio,
      cantidad,
    });

    renderProductos();
    form.reset();
  });

  return form;
}
