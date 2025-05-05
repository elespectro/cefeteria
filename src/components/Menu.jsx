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
  huevos: [
    { nombre: "Huevo Revuelto", precio: "$90 MXN" },
    { nombre: "Huevos Motuleños", precio: "$150 MXN" },
    { nombre: "Omelette", precio: "$120 MXN" },
    { nombre: "Huevos Estrellados", precio: "$90 MXN" }
  ],
  chilaquiles_y_Enchiladas: [
    { nombre: "Chilaquiles", precio: "$140 MXN" },
    { nombre: "Enchiladas Suizas", precio: "$120 MXN" }
  ],
  ensaladas: [
    { nombre: "Ensalada de Cabra", precio: "$140 MXN" },
    { nombre: "Ensalada Marbo", precio: "$170 MXN" },
    { nombre: "Ensalada César", precio: "$160 MXN" }
  ],
  hotcakes: [
    { nombre: "Tradicionales", precio: "$90 MXN" },
    { nombre: "Con Tocino", precio: "$120 MXN" },
    { nombre: "Marbo", precio: "$150 MXN" }
  ],
  sandwiches: [
    { nombre: "Avocado Toast", precio: "$90 MXN" },
    { nombre: "Banana Toast", precio: "$75 MXN" },
    { nombre: "Sándwich Marbo", precio: "$100 MXN" },
    { nombre: "Club Sándwich", precio: "$120 MXN" },
    { nombre: "Croissant de Jamón y Queso", precio: "$95 MXN" },
    { nombre: "Sándwich de Pechuga", precio: "$120 MXN" }
  ],
  pastas: [
    { nombre: "Fetuccine Alfredo", precio: "$120 MXN" },
    { nombre: "Pasta Izamal", precio: "$140 MXN" },
    { nombre: "Pasta Marbo", precio: "$160 MXN" },
    { nombre: "Lasagna", precio: "$150 MXN" }
  ],
  especialidades: [
    { nombre: "Hamburguesa Marbo", precio: "$170 MXN" },
    { nombre: "Hamburguesa BBQ", precio: "$160 MXN" },
    { nombre: "Fajitas Mar y Tierra", precio: "$185 MXN" },
    { nombre: "Nachos Marbo", precio: "$100 MXN" },
    { nombre: "Chorizo Fundido", precio: "$140 MXN" }
  ]
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