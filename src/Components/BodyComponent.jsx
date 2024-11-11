import React from "react";
import '../css/Game.css';

export const BodyComponent = ({ slimeJugador1, slimeJugador2 }) => {
    return (
        <div className="body">
            <div className="SlimesEscogidos">
                <img src={slimeJugador1.image} alt="Slime Jugador 1" />
                <img src={slimeJugador2.image} alt="Slime Jugador 2" />
            </div>
            <ul className="AtributosPlayers">
                <li>Ataque: {slimeJugador1.Ataque}, Defensa: {slimeJugador1.Defensa}, Velocidad: {slimeJugador1.Velocidad}</li>
                <li>Ataque: {slimeJugador2.Ataque}, Defensa: {slimeJugador2.Defensa}, Velocidad: {slimeJugador2.Velocidad}</li>
            </ul>
        </div>
    );
};
