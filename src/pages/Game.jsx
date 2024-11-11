import React, { useState } from "react";
import { BottomComponent } from "../Components/BottomComponent.jsx";
import TopComponent from "../Components/TopComponent.jsx"; 
import { BodyComponent } from "../Components/BodyComponent.jsx";
import { slimes } from '../data/slimes'; 
import '../css/Game.css';

function Game() {
  const [vidasJugador1, setVidasJugador1] = useState([true, true, true]);
  const [vidasJugador2, setVidasJugador2] = useState([true, true, true]);
  const [atributoSeleccionado, setAtributoSeleccionado] = useState("");
  const [resultado, setResultado] = useState("");
  
  const [slimeJugador1, setSlimeJugador1] = useState(slimes[Math.floor(Math.random() * slimes.length)]);
  const [slimeJugador2, setSlimeJugador2] = useState(slimes[Math.floor(Math.random() * slimes.length)]);
  

 
  
  return (
    <div className="Game">
      <TopComponent
        vidasJugador1={vidasJugador1}
        vidasJugador2={vidasJugador2}
        atributoSeleccionado={atributoSeleccionado}
        resultado={resultado}
      />
      <BodyComponent slimeJugador1={slimeJugador1} slimeJugador2={slimeJugador2} />
      <BottomComponent
        setVidasJugador1={setVidasJugador1}
        setVidasJugador2={setVidasJugador2}
        setAtributoSeleccionado={setAtributoSeleccionado}
        setResultado={setResultado}
        setSlimeJugador1={setSlimeJugador1}
        setSlimeJugador2={setSlimeJugador2}
      />
    </div>
  );
}

export default Game;
