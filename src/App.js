import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Header from "./Components/Headers/Header.jsx";
import Reservas from "./Components/Reservas/Reservas.jsx";
import Ubicacion from "./Components/Ubciacion/Ubicacion";

const dishes = [
  {
    id:1,
    name:'plato 1',
    description:'Este es el plato 1',
    price:10
  },
  {
    id:2,
    name:'plato 2',
    description:'Este es el plato 2',
    price:20
  },
  {
    id:3,
    name:'plato 3',
    description:'Este es el plato 3',
    price:15
  }
]

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home dishes={dishes}/>} />
          <Route path="/Ubicacion" element={<Ubicacion />} />
          <Route path="/Reservas" element={<Reservas />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
