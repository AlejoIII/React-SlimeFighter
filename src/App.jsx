import React from 'react';
import { IonButton } from "@ionic/react";
import './App.css';

function App() {
  return (
    <>
      <img src="/images/Slime Rancher/Ventana_inicio.png" alt="Logo" />
      <IonButton expand="full" className='button' href='./Game.jsx'>Play</IonButton>
    </>
  )
}

export default App


