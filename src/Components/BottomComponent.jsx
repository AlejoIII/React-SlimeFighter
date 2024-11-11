import React from "react";
import { useNavigate } from "react-router-dom";
import Slime from "../Components/Slime.jsx";

const Atributos = {
  ATAQUE: "ATAQUE",
  DEFENSA: "DEFENSA",
  VELOCIDAD: "VELOCIDAD",
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

export const BottomComponent = ({setVidasJugador1,setVidasJugador2,setAtributoSeleccionado,setResultado,setSlimeJugador1,setSlimeJugador2,}) => {
  const navigate = useNavigate();

  const pelea = () => {
    const randomAtri = Math.floor(Math.random() * 3);
    const atributoElegido = Object.values(Atributos)[randomAtri];
    setAtributoSeleccionado(`Atributo: ${atributoElegido}`);
    const randomVal1 = Math.floor(Math.random() * 100) + 1;
    const randomVal2 = Math.floor(Math.random() * 100) + 1;

    let boostedAttribute1, boostedAttribute2, FirstWinPlayer;
  
    switch (atributoElegido) {
      case Atributos.ATAQUE:
        boostedAttribute1 = slimeJugador1.ataque + randomVal1;
        boostedAttribute2 = slimeJugador2.ataque + randomVal2;
        break;
      case Atributos.DEFENSA:
        boostedAttribute1 = slimeJugador1.defensa + randomVal1;
        boostedAttribute2 = slimeJugador2.defensa + randomVal2;
        break;
      case Atributos.VELOCIDAD:
        boostedAttribute1 = slimeJugador1.velocidad + randomVal1;
        boostedAttribute2 = slimeJugador2.velocidad + randomVal2;
        break;
      default:
        return;  
    }
  
    FirstWinPlayer = boostedAttribute1 > boostedAttribute2;
    setResultado(
      `Jugador 1: ${boostedAttribute1} | Jugador 2: ${boostedAttribute2} | Ganador: ${
        FirstWinPlayer ? "Jugador 1" : "Jugador 2"
      }`
    );
  
    actualizarVidas(FirstWinPlayer);
  };


  const actualizarVidas = (ganadorJugador1) => {
    if (ganadorJugador1) {
      setVidasJugador2((prevVidas) => {
        const nuevasVidas = [...prevVidas];
        const index = nuevasVidas.findIndex(vida => vida === true);
        if (index !== -1) {
          nuevasVidas[index] = false;
        }
        return nuevasVidas;
      });
    } else {
      setVidasJugador1((prevVidas) => {
        const nuevasVidas = [...prevVidas];
        const index = nuevasVidas.findIndex(vida => vida === true);
        if (index !== -1) {
          nuevasVidas[index] = false;
        }
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

    setSlimeJugador1(slimes[randomSlime1]);
    setSlimeJugador2(slimes[randomSlime2]);
  };

  return (
    <div className="bottom">
      <button onClick={pelea}>Luchar</button>
      <button onClick={reiniciarJuego}>Reiniciar</button>
      <button onClick={() => navigate("/")}>Salir</button>
    </div>
  );
};
