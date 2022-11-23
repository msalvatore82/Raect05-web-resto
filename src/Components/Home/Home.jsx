import React from "react";
import "./Home.css";

// eslint-disable-next-line no-unused-vars
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

const Home = (props) => {
    
  // eslint-disable-next-line no-unused-vars
  const dishesList = props.dishes.map((dish) => {
    return (
      <div key={dish.id} className="dish-card">
        <p>
          <b>Name:</b> {dish.name}
        </p>
        <p>
          <b>Description:</b> {dish.description}
        </p>
        <p>
          <b>Price:</b> {dish.price}
        </p>
      </div>
    );
  });
  return (
    <div>
      <div className="contenedor-home">
        <h3 className="titulo"> ¿Qué cocinamos? </h3>
        <p className="texto-acerca-de">
          Lo que nos gusta, un poco de aquí y un poco de allí. Podríamos
          intentar contarte que hacemos una cocina fusión, con influencias sud
          asiáticas, y tal, y tal... pero creo que ya estamos cansados de
          escucharlo. Además, eso no es voltereta. En nuestro caso es muy
          sencillo, cocinamos todo aquello que nos apasiona, que probamos y nos
          marca, y esa, es básicamente nuestra carta, nuestros platos favoritos.
        </p>
      </div>
      <div className="dish">
        <h1>Nuestros Platos</h1>
        <div className="dishes-container">{this.dishesList}</div>
      </div>
    </div>
  );
};

export default Home;
