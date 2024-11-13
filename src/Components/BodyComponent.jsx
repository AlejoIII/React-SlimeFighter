import React from "react";
import '../css/Game.css';
// Componente que se encarga de mostrar los slimes seleccionados y sus atributos
export const BodyComponent = ({ slimeJugador1, slimeJugador2 }) => {
    return (
      <div className="body">
        <div className="SlimesEscogidos">
          <img src={slimeJugador1.image} alt="Slime Jugador 1" />
          <img src={slimeJugador2.image} alt="Slime Jugador 2" />
        </div>
        <ul className="AtributosPlayers">
          <li>Ataque: {slimeJugador1.ataque}, Defensa: {slimeJugador1.defensa}, Velocidad: {slimeJugador1.velocidad}</li>
          <li>Ataque: {slimeJugador2.ataque}, Defensa: {slimeJugador2.defensa}, Velocidad: {slimeJugador2.velocidad}</li>
        </ul>
      </div>
    );
  };
  