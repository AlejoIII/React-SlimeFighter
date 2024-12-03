import React from 'react';
import { IonGrid, IonRow, IonCol, IonImg, IonText } from '@ionic/react';

function TopComponent({ vidasJugador1, vidasJugador2, atributoSeleccionado, resultado }) {
  return (
    <IonGrid className="top-component"> 
      <IonRow>
        <IonCol size="4" className="vidas1">
          {vidasJugador1.map((vida, index) =>
            vida ? (
              <IonImg
                key={index}
                src="/images/Slime Rancher/Gemas/gema_dorada.png"
                alt={`Vida ${index + 1}`}
              />
            ) : null
          )}
        </IonCol>

        <IonCol size="4" className="atributo" text-center>
          <IonText>
            <h3>{atributoSeleccionado}</h3>
          </IonText>
        </IonCol>

        <IonCol size="4" className="vidas2">
          {vidasJugador2.map((vida, index) =>
            vida ? (
              <IonImg
                key={index}
                src="/images/Slime Rancher/Gemas/gema_dorada.png"
                alt={`Vida ${index + 1}`}
              />
            ) : null
          )}
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol className="resultado" text-center>
          <IonText>
            <h3>{resultado}</h3>
          </IonText>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
}

export default TopComponent;

