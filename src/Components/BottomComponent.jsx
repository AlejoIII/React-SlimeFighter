import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Slime from '../Components/Slime.jsx';

const Atributos = {
  ATAQUE: "ATAQUE",
  DEFENSA: "DEFENSA",
  VELOCIDAD: "VELOCIDAD",
};

const slimes = [
  new Slime("/images/Slime Rancher/Slimes/Gato_monedas.png", 50, 30, 70),
  new Slime("/images/Slime Rancher/Slimes/Slime_Lava.png", 70, 50, 40),
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

export const BottomComponent = () => {
  const navigate = useNavigate();
  const [resultado, setResultado] = useState("");
  const [atributoSeleccionado, setAtributoSeleccionado] = useState("");
  const [setrandomSlime1, setRandomSlime1] = useState("");
  const [ChoosenAttribute] = useState("");
  const [FightButton] = useState("");
  const [FirstWinPlayer] = useState("");
  const [SecondPlayerLife1] = useState("");
  const [SecondPlayerLife2] = useState("");
  const [SecondPlayerLife3] = useState("");
  const [FirstPlayerLife1] = useState("");
  const [FirstPlayerLife2] = useState("");
  const [FirstPlayerLife3] = useState("");
  const [life1] = useState("");
  const [life2] = useState("");
  const [life3] = useState("");
  
  const pelea = () => {
    // Seleccionamos el atributo aleatorio
    const randomAtri = Math.floor(Math.random() * 3);
    const atributoElegido = Object.values(Atributos)[randomAtri];
    setAtributoSeleccionado(`Atributo seleccionado: ${atributoElegido}`);

    // Seleccionamos los valores aleatorios entre 1 y 100 para cada slime
    const randomVal1 = Math.floor(Math.random() * 100) + 1;
    const randomVal2 = Math.floor(Math.random() * 100) + 1;

    let boostedAttribute1, boostedAttribute2, FirstWinPlayer;

    switch (atributoElegido) {
      case Atributos.ATAQUE:
        boostedAttribute1 = `Ataque: ${slimes[0].ataque} + ${randomVal1}`;
        boostedAttribute2 = `Ataque: ${slimes[1].ataque} + ${randomVal2}`;
        FirstWinPlayer =
          slimes[0].ataque + randomVal1 > slimes[1].ataque + randomVal2;
        break;
      case Atributos.DEFENSA:
        boostedAttribute1 = `Defensa: ${slimes[0].defensa} + ${randomVal1}`;
        boostedAttribute2 = `Defensa: ${slimes[1].defensa} + ${randomVal2}`;
        FirstWinPlayer =
          slimes[0].defensa + randomVal1 > slimes[1].defensa + randomVal2;
        break;
      case Atributos.VELOCIDAD:
        boostedAttribute1 = `Velocidad: ${slimes[0].velocidad} + ${randomVal1}`;
        boostedAttribute2 = `Velocidad: ${slimes[1].velocidad} + ${randomVal2}`;
        FirstWinPlayer =
          slimes[0].velocidad + randomVal1 > slimes[1].velocidad + randomVal2;
        break;
      default:
        return;
    }

    // Actualizamos el resultado
    setResultado(
      `${boostedAttribute1} | ${boostedAttribute2} | Ganador: ${
        FirstWinPlayer ? "Slime 1" : "Slime 2"
      }`
    );
  };

  const RestartGame = () => {
    // Volvemos a mostrar las vidas
    FirstPlayerLife1.setVisible(true);
    FirstPlayerLife2.setVisible(true);
    FirstPlayerLife3.setVisible(true);
    SecondPlayerLife1.setVisible(true);
    SecondPlayerLife2.setVisible(true);
    SecondPlayerLife3.setVisible(true);
    // Activamos botones
    FightButton.setDisable(false);
    LuckButton.setDisable(false);
    // Restablecemos los mensajes
    ChoosenAttribute.setText("");
    // Volvemos a elegir slimes aleatorios
    setRandomSlimes();
  };

  const Endgame = () => {
    if (
      !FirstPlayerLife1.isVisible() &&
      !FirstPlayerLife2.isVisible() &&
      !FirstPlayerLife3.isVisible()
    ) {
      EndgameMessage("¡El slime 1 ha ganado!");
      return true;
    } else if (
      !SecondPlayerLife1.isVisible() &&
      !SecondPlayerLife2.isVisible() &&
      !SecondPlayerLife3.isVisible()
    ) {
      EndgameMessage("¡El slime 2 ha ganado!");
      return true;
    }
    return false;
  };

  const LifeVisibility = (FirstWinPlayer) => {
    // Restamos las vidas
    if (FirstWinPlayer) {
      RestLife(SecondPlayerLife1, SecondPlayerLife2, SecondPlayerLife3);
    } else {
      RestLife(FirstPlayerLife1, FirstPlayerLife2, FirstPlayerLife3);
    }

    if (Endgame()) {
      return;
    }
  };

  const RestLife = (life1, life2, life3) => {
    // Ocultamos la vida
    if (Life1.isVisible()) {
      Life1.setVisible(false);
    } else if (Life2.isVisible()) {
      Life2.setVisible(false);
    } else if (Life3.isVisible()) {
      Life3.setVisible(false);
    }
  };

  const setRandomSlimes = () => {
    const randomSlime1 = Math.floor(Math.random() * slimes.length);
    let randomSlime2;

    do {
      randomSlime2 = Math.floor(Math.random() * slimes.length);
    } while (randomSlime1 === randomSlime2);

    FirstPlayer.setImage(slimes[randomSlime1].getImage());
    SecondPlayer.setImage(slimes[randomSlime2].getImage());

    showAttribute(slimes[randomSlime1]);
    showAttribute1(slimes[randomSlime2]);

    FirstPlayer.setFitHeight(200);
    FirstPlayer.setFitWidth(200);
    SecondPlayer.setFitHeight(200);
    SecondPlayer.setFitWidth(200);
  };

  const showAttribute = (slime) => {
    const showAttribute = setText(
      "Ataque: " +
        slime.getAtaque() +
        "\n" +
        "Defensa: " +
        slime.getDefensa() +
        "\n" +
        "Velocidad: " +
        slime.getVelocidad()
    );
  };

  const showAttribute1 = (slime) => {
    const showAttribute1 = setText(
      "Ataque: " +
        slime.getAtaque() +
        "\n" +
        "Defensa: " +
        slime.getDefensa() +
        "\n" +
        "Velocidad: " +
        slime.getVelocidad()
    );
  };

  const EndgameMessage = (message) => {
    // Mostramos el mensaje de victoria
    const ChoosenAttribute = setText(message);
    // Desactivamos los botones
    const FightButton = setDisable(true);
  };

  return (
    <div className="bottom">
      <button onClick={pelea}>Luchar</button>
      <button>Reiniciar</button>
      <button onClick={() => navigate("/")}>Salir</button>
      <div>
        <p>{atributoSeleccionado}</p>
        <p>{resultado}</p>
      </div>
    </div>
  );
};
