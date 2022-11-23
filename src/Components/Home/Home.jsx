import React from "react";
import "./Home.css";

const Home = (props) => {
    
    const dishesList  = props.dishes.map((dish)=>{
        return(
          <div>
            <div>
            Nombre:<h2>{dish.name}</h2>
              Descripción: <h3>{dish.description}</h3>
              Precio: <h2>{dish.price} €</h2>
            </div>
            <hr/>        
          </div>
        )
      })
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
         <h3>Nuestros Platos</h3>
         <div className="dish-card">{dishesList}</div><div>
         
      </div>  
       </div>
     </div>

    )   
}

export default Home