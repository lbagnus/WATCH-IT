import React from "react";
import Marlon from "../imagenes/actores/Marlon-brando.jpeg";
import InfoActor from "./InfoActor";

var nombre_actor = "Tu vieja";
var desc_actor = "Lorem ipsum dolor sit amet. In quas consequatur vel enim dolorem qui assumenda quia sed delectus cumque! Aut dicta blanditiis et quisquam doloribus est veritatis unde qui quis quis ad error fugiat qui omnis maxime. Aut molestiae nihil et explicabo sunt quo veritatis quia. Lorem ipsum dolor sit amet. In quas consequatur vel enim dolorem qui assumenda quia sed delectus cumque! Aut dicta blanditiis et quisquam doloribus est veritatis unde qui quis quis ad error fugiat qui omnis maxime. Aut molestiae nihil et explicabo sunt quo veritatis quia"

const Actor = () => {
    return (
      <div className="portada">
            <InfoActor nombre={nombre_actor}
                imagen={Marlon}
             descripcion={desc_actor}>
                
            </InfoActor>
     </div> 
);
};
export default Actor;