import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Header from "./Components/Headers/Header.jsx";
import Reservas from "./Components/Reservas/Reservas.jsx";
import Ubicacion from "./Components/Ubciacion/Ubicacion";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Ubicacion" element={<Ubicacion />} />
          <Route path="/Reservas" element={<Reservas />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
