import { productos } from '../../src/productData.js';
import { Producto } from '../producto/producto.js';
import { Formulario } from '../formulario/formulario.js';

export function renderProductos() {
  const app = document.getElementById('app');
  app.innerHTML = ''; // Limpia el contenido

  const formulario = Formulario();
  app.appendChild(formulario);

  const tabla = document.createElement('table');
  tabla.innerHTML = `
    <thead>
      <tr>
        <th>Nombre Producto</th>
        <th>Cantidad</th>
        <th>Precio</th>
        <th>Total</th>
        <th></th>
      </tr>
    </thead>
    <tbody></tbody>
  `;

  const tbody = tabla.querySelector('tbody');
  productos.forEach((producto) => {
    const productoRow = Producto(producto);
    tbody.appendChild(productoRow);
  });

  app.appendChild(tabla);

  const totalGeneral = productos.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
  const totalDiv = document.createElement('div');
  totalDiv.className = 'total';
  totalDiv.innerText = `Q${totalGeneral.toFixed(2)}`;

  app.appendChild(totalDiv);
}

renderProductos(); // Llama al renderizado inicial
