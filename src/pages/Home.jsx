import React from 'react';
import { Navigate } from 'react-router-dom';
import { IonContent, IonPage, IonButton, IonImg } from '@ionic/react';

function Home() {
    const [goToGame, setGoToGame] = React.useState(false);

    if (goToGame) {
        return <Navigate to="/game" />;
    }

    return (
      <IonPage className="Home">
        <IonContent fullscreen className="ion-text-center">
          <IonImg
            src="/images/Slime Rancher/Ventana_inicio.png"
            alt="Logo"
            className="home-logo"
          />
          <IonButton expand="block" onClick={() => setGoToGame(true)}>
            Play
          </IonButton>
        </IonContent>
      </IonPage>
    );
}

export default Home;
