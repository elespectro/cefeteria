import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Reserva from "./components/Reserva";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h2>Bienvenido a Mi Cafetería ☕</h2>} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservas" element={<Reserva />} />
      </Routes>
    </Router>
  );
}

export default App;