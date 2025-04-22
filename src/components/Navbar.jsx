import React from "react";
import "./../styles/navbar.css";

const Navbar = () => {
  return (
    <nav>
      <h1>Mi Cafetería</h1>
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/menu">Menú</a></li>
        <li><a href="/reservas">Reservas</a></li>
      </ul>
    </nav>
  );
};
export default Navbar;