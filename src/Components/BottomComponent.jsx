import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slime from "../Components/Slime.jsx";
// Constantes para los atributos de los slimes
const Atributos = {
  ATAQUE: "ataque",
  DEFENSA: "defensa",
  VELOCIDAD: "velocidad",
};
// Slimes disponibles
const slimes = [
  new Slime("/images/Slime Rancher/Slimes/Slime_agua.png", 30, 20, 90),
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
// Componente que se encarga de mostrar los botones de luchar, reiniciar y salir
export const BottomComponent = ({
  setVidasJugador1,
  setVidasJugador2,
  setAtributoSeleccionado,
  setResultado,
  setSlimeJugador1,
  setSlimeJugador2,
}) => {
  // Hook para navegar entre las páginas
  const navigate = useNavigate();
  // Hook para manejar el estado de los slimes
  const [slimeJugador1, setSlimeJugador1State] = useState({});
  const [slimeJugador2, setSlimeJugador2State] = useState({});
  // Hook para manejar el estado del juego
  const [juegoTerminado, setJuegoTerminado] = useState(false);
  // Hook para manejar el mensaje de resultado
  const [mensajeResultado, setMensajeResultado] = useState("");
  // Hook para manejar el atributo seleccionado
  useEffect(() => {
    seleccionarSlimesAleatorios();
  }, []);
  // Funcion para realizar la pelea
  const pelea = () => {
    // Seleccionar un atributo aleatorio
    const atributos = [Atributos.ATAQUE, Atributos.DEFENSA, Atributos.VELOCIDAD];
    const atributoAleatorio = atributos[Math.floor(Math.random() * atributos.length)];
    setAtributoSeleccionado(atributoAleatorio);
    // Comparar los atributos de los slimes
    const valorJugador1 = slimeJugador1[atributoAleatorio];
    const valorJugador2 = slimeJugador2[atributoAleatorio];
    // Actualizar el resultado
    if (valorJugador1 > valorJugador2) {
      actualizarVidas(true);
      if (!juegoTerminado) setMensajeResultado("Jugador 1 gana");
    } else if (valorJugador1 < valorJugador2) {
      actualizarVidas(false);
      if (!juegoTerminado) setMensajeResultado("Jugador 2 gana");
    } else {
      if (!juegoTerminado) setMensajeResultado("Empate");
    }
  };
  // Funcion para actualizar las vidas de los jugadores
  const actualizarVidas = (FirstWinPlayer) => {
    if (FirstWinPlayer) {
      setVidasJugador2((prevVidas) => {
        const nuevasVidas = [...prevVidas];
        const index = nuevasVidas.findIndex((vida) => vida === true); 
        if (index !== -1) {
          nuevasVidas[index] = false;
        }
        if (!nuevasVidas.includes(true)) {
          setJuegoTerminado(true);
          setMensajeResultado("¡Jugador 1 gana!");
        }
        return nuevasVidas;
      });
    } else {
      setVidasJugador1((prevVidas) => {
        const nuevasVidas = [...prevVidas];
        const index = nuevasVidas.findIndex((vida) => vida === true); 
        if (index !== -1) {
          nuevasVidas[index] = false;
        }
        if (!nuevasVidas.includes(true)) {
          setJuegoTerminado(true);
          setMensajeResultado("¡Jugador 2 gana!");
        }
        return nuevasVidas;
      });
    }
  };
  // Funcion para reiniciar el juego
  const reiniciarJuego = () => {
    setVidasJugador1([true, true, true]);
    setVidasJugador2([true, true, true]);
    setMensajeResultado("");
    setAtributoSeleccionado("");
    setJuegoTerminado(false);
    seleccionarSlimesAleatorios();
  };
  // Funcion para seleccionar los slimes aleatorios
  const seleccionarSlimesAleatorios = () => {
    // Seleccionar dos slimes aleatorios
    const randomSlime1 = Math.floor(Math.random() * slimes.length);
    // Seleccionar otro slime aleatorio diferente al anterior
    let randomSlime2;
    do {
      randomSlime2 = Math.floor(Math.random() * slimes.length);
    } while (randomSlime1 === randomSlime2);
    // Actualizar los slimes de los jugadores
    setSlimeJugador1State(slimes[randomSlime1]);
    setSlimeJugador2State(slimes[randomSlime2]);
  };
  // Actualizar los slimes de los jugadores
  return (
    <div className="bottom">
      <button onClick={pelea} disabled={juegoTerminado}>Luchar</button>
      <button onClick={reiniciarJuego} disabled={!juegoTerminado}>Reiniciar</button>
      <button onClick={() => navigate("/")}>Salir</button>
      {mensajeResultado && <p>{mensajeResultado}</p>}
    </div>
  );
};
