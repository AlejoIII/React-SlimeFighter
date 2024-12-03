import React from "react";
import '../css/Game.css';
import { IonGrid, IonRow, IonCol, IonImg, IonList, IonItem } from '@ionic/react';


// Componente que se encarga de mostrar los slimes seleccionados y sus atributos
export const BodyComponent = ({ slimeJugador1, slimeJugador2 }) => {
    return (
        <IonGrid className="body">
          <IonRow className="SlimesEscogidos" justify-content-center>
            <IonCol size="6" className="slime-col">
              <IonImg src={slimeJugador1.image} alt="Slime Jugador 1" />
            </IonCol>
            <IonCol size="6" className="slime-col">
              <IonImg src={slimeJugador2.image} alt="Slime Jugador 2" />
            </IonCol>
          </IonRow>
    
          <IonRow className="AtributosPlayers">
            <IonCol>
              <IonList>
                <IonItem>
                  Jugador 1: Ataque: {slimeJugador1.Ataque}, Defensa: {slimeJugador1.Defensa}, Velocidad: {slimeJugador1.Velocidad}
                </IonItem>
                <IonItem>
                  Jugador 2: Ataque: {slimeJugador2.Ataque}, Defensa: {slimeJugador2.Defensa}, Velocidad: {slimeJugador2.Velocidad}
                </IonItem>
              </IonList>
            </IonCol>
          </IonRow>
        </IonGrid>
      );
};

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
  