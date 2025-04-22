import React, { useState } from "react";
import "../styles/reserva.css";

const Reserva = () => {
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reserva confirmada para ${nombre} el ${fecha} a las ${hora}`);
  };

  return (
    <div className="reserva-container">
      <h2>Reserva tu mesa 📝</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />

        <label>Fecha:</label>
        <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} required />

        <label>Hora:</label>
        <input type="time" value={hora} onChange={(e) => setHora(e.target.value)} required />

        <button type="submit">Confirmar Reserva</button>
      </form>
    </div>
  );
};

export default Reserva;
