import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Reservas.css'

const Reservas = () => {
  let navigate = useNavigate();
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [visible, setVisible] = useState(true);
  const [message, setMessage] = useState("");

  const [data, setData] = useState({
    nombre: "",
    comensales: "",
    telefono: "",
    fecha: "",
    Observaciones: "",
  });

  const initialState = {
    nombre: "",
    comensales: "",
    telefono: "",
    fecha: "",
    Observaciones: "",
  };

  const clearState = () => {
    setData({ ...initialState });
  };

  let regexName = new RegExp(/^([a-zA-Z\s]{5,25})$/);

  useEffect(() => {
    if (!regexName.test(data.nombre) || !data.nombre === " ") {
      setMessage("el nombre debe ser con un formato correcto");
      setBtnDisabled(true);
      } else if (data.telefono.length < 9) {
      setMessage("El Nº de telefono debe tener al menos 9 numeros");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    //eslint-disable-next-line
  }, [data]);
  const handleInputChange = (e) => {
    setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "enviando datos..." +
        data.nombre +
        " " +
        data.comensales +
        " " +
        data.telefono +
        " " +
        data.fecha +
        " " +
        data.Observaciones
    );

    localStorage.setItem("Datos Reserva", JSON.stringify(data));

    
    clearState();
    setTimeout(() => {
      navigate("/");
    }, 2000);
    setVisible(false);
  };

  return (
    <>
      <div className="titulo">Tu reserva</div>
      <div className="form-reserva">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombre"
            value={data.nombre}
            placeholder="Nombre y Apellido"
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="comensales"
            value={data.comensales}
            placeholder="Cantidad de comensales"
            onChange={handleInputChange}
          />
          <input
            type="tel"
            name="telefono"
            value={data.telefono}
            placeholder="Número de telefono"
            onChange={handleInputChange}
          />
          <input
            type="date"
            name="fecha"
            value={data.fecha}
            placeholder="fecha"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="Observaciones"
            value={data.Observaciones}
            placeholder="Observaciones"
            onChange={handleInputChange}
          />
          <button className="button" type="submit" disabled={btnDisabled}>
            Enviar
          </button>
        </form>
      </div>
      <p className="form-mensaje">{visible ? message : "Lo estamos redirigiendo al Home..."}</p>
    </>
  );
};

export default Reservas;
