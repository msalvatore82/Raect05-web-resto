import React from "react";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header.jsx";
import Reservas from "./Components/Reservas/Reservas";
import Ubicacion from "./Components/Ubciacion/Ubicacion";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Reservas />} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Ubicacion />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;