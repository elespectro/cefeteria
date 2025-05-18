import React from "react";
import "./../styles/menu.css";

const menu = [
  {
    categoria: "Entradas",
    imagen: "entradas.jpg",
    productos: [
      { nombre: "Papas a la Francesa", precio: "$50 MXN" },
      { nombre: "Papas Marbo", precio: "$70 MXN" },
      { nombre: "Papas Gajo", precio: "$95 MXN" },
      { nombre: "Aros de Cebolla", precio: "$65 MXN" },
    ]
  },
  {
    categoria: "Postres",
    imagen: "postres.jpg",
    productos: [
      { nombre: "Cheesecake de Frambuesa", precio: "$70 MXN" },
      { nombre: "Pastel de Chocolate", precio: "$70 MXN" },
      { nombre: "Pastel de Zanahoria", precio: "$80 MXN" },
      { nombre: "Galletas de Chispas de Chocolate", precio: "$15 MXN" },
    ]
  },
];

const Menu = () => {
  return (
    <div className="menu-container">
      <h2>☕ Menú de Marbo Bistro & Café</h2>
      {menu.map((seccion, index) => (
        <div key={index} className="menu-seccion">
          <div className="menu-texto">
            <h3>{seccion.categoria}</h3>
            <ul>
              {seccion.productos.map((producto, i) => (
                <li key={i}>
                  {producto.nombre} - <span className="precio">{producto.precio}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="menu-imagen">
            <img src={require(`../assets/${seccion.imagen}`)} alt={seccion.categoria} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;