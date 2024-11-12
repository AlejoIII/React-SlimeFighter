import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slime from "../Components/Slime.jsx";

const Atributos = {
  ATAQUE: "ataque",
  DEFENSA: "defensa",
  VELOCIDAD: "velocidad",
};

const slimes = [
  new Slime("/images/Slime Rancher/Slimes/Gato_monedas.png", 50, 30, 70),
  new Slime("/images/Slime Rancher/Slimes/Siime_Lava.png", 70, 50, 40),
  new Slime("/images/Slime Rancher/Slimes/Slime_agua.png", 30, 20, 90),
  new Slime("/images/Slime Rancher/Slimes/Slime_dorado.png", 90, 70, 60),
  new Slime("/images/Slime Rancher/Slimes/Slime_espacial.png", 60, 40, 80),
  new Slime("/images/Slime Rancher/Slimes/Slime_Fuego.png", 80, 60, 50),
  new Slime("/images/Slime Rancher/Slimes/Slime_Gato.png", 40, 30, 70),
  new Slime("/images/Slime Rancher/Slimes/Slime_gato_enfadado.png", 70, 60, 40),
  new Slime("/images/Slime Rancher/Slimes/Slime_Lunar.png", 60, 40, 80),
  new Slime("/images/Slime Rancher/Slimes/Slime_miel.png", 50, 40, 50),
  new Slime("/images/Slime Rancher/Slimes/Slime_Normal.png", 30, 30, 60),
  new Slime("/images/Slime Rancher/Slimes/Slime_podrido.png", 20, 80, 20),
  new Slime("/images/Slime Rancher/Slimes/Slime_roca.png", 80, 70, 30),
  new Slime("/images/Slime Rancher/Slimes/Slime_Toxico.png", 60, 50, 60),
  new Slime("/images/Slime Rancher/Slimes/Slime_Zorro.png", 70, 40, 90),
];

export const BottomComponent = ({
  setVidasJugador1,
  setVidasJugador2,
  setAtributoSeleccionado,
  setResultado,
  setSlimeJugador1,
  setSlimeJugador2,
}) => {
  const navigate = useNavigate();
  const [slimeJugador1, setSlimeJugador1State] = useState({});
  const [slimeJugador2, setSlimeJugador2State] = useState({});


  useEffect(() => {
    seleccionarSlimesAleatorios();
  }, []);

  const pelea = () => {
    // Seleccionar un atributo aleatorio
    const atributos = [Atributos.ATAQUE, Atributos.DEFENSA, Atributos.VELOCIDAD];
    // Seleccionar un atributo aleatorio
    const atributoAleatorio = atributos[Math.floor(Math.random() * atributos.length)];
    setAtributoSeleccionado(atributoAleatorio);
    // Comparar los atributos de los slimes
    const valorJugador1 = slimeJugador1[atributoAleatorio];
    const valorJugador2 = slimeJugador2[atributoAleatorio];
    // Actualizar el estado del resultado
    if (valorJugador1 > valorJugador2) {
      actualizarVidas(true);
      setResultadoState("¡Jugador 1 gana!");
    } else if (valorJugador1 < valorJugador2) {
      actualizarVidas(false);
      setResultadoState("¡Jugador 2 gana!");
    } else {
      setResultadoState("¡Empate!");
    }
  };

  const actualizarVidas = (FirstWinPlayer) => {
    if (FirstWinPlayer) {
      setVidasJugador2((prevVidas) => {
        const nuevasVidas = [...prevVidas];
        const index = nuevasVidas.findIndex((vida) => vida === true); 
        if (index !== -1) {
          nuevasVidas[index] = false; 
        }
        console.log("Vidas Jugador 2 actualizadas:", nuevasVidas);
        return nuevasVidas;
      });
    } else {
      setVidasJugador1((prevVidas) => {
        const nuevasVidas = [...prevVidas];
        const index = nuevasVidas.findIndex((vida) => vida === true); 
        if (index !== -1) {
          nuevasVidas[index] = false; 
        }
        console.log("Vidas Jugador 1 actualizadas:", nuevasVidas);
        return nuevasVidas;
      });
    }
  };

  const reiniciarJuego = () => {
    setVidasJugador1([true, true, true]);
    setVidasJugador2([true, true, true]);
    setResultado("");
    setAtributoSeleccionado("");
    seleccionarSlimesAleatorios();
  };

  const seleccionarSlimesAleatorios = () => {
    const randomSlime1 = Math.floor(Math.random() * slimes.length);
    let randomSlime2;
    do {
      randomSlime2 = Math.floor(Math.random() * slimes.length);
    } while (randomSlime1 === randomSlime2);

    setSlimeJugador1State(slimes[randomSlime1]);
    setSlimeJugador2State(slimes[randomSlime2]);
  };

  return (
    <div className="bottom">
      <button onClick={pelea}>Luchar</button>
      <button onClick={reiniciarJuego}>Reiniciar</button>
      <button onClick={() => navigate("/")}>Salir</button>
    </div>
  );
};

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
