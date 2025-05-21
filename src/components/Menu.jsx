import React from "react";
import "./../styles/menu.css";

const menu = {
  entradas: [
    { nombre: "Papas a la Francesa", precio: "$50 MXN" },
    { nombre: "Papas Marbo", precio: "$70 MXN" },
    { nombre: "Papas Gajo", precio: "$95 MXN" },
    { nombre: "Aros de Cebolla", precio: "$65 MXN" },
    { nombre: "Dedos de Queso", precio: "$75 MXN" },
    { nombre: "Elote Dulce a la Mantequilla", precio: "$70 MXN" },
    { nombre: "Boneless", precio: "$145 MXN" }
  ],
  postres: [
    { nombre: "Cheesecake de Frambuesa", precio: "$70 MXN" },
    { nombre: "Pastel de Chocolate", precio: "$70 MXN" },
    { nombre: "Pastel de Zanahoria", precio: "$80 MXN" },
    { nombre: "Galletas de Chispas de Chocolate", precio: "$15 MXN" },
    { nombre: "Pan de Nata", precio: "$45 MXN" }
  ],
  // Continúa con las demás secciones...
};

const Menu = () => {
  return (
    <div className="menu-container">
      <h2>☕ Menú de Marbo Bistro & Café</h2>

      {Object.entries(menu).map(([categoria, productos]) => (
        <div key={categoria} className="categoria">
          <h3>{categoria.toUpperCase()}</h3>
          <ul>
            {productos.map((producto, index) => (
              <li key={index}>{producto.nombre} - <span className="precio">{producto.precio}</span></li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Menu;