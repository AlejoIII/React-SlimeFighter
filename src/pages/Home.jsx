import React from 'react';
import { Navigate } from 'react-router-dom';

function Home() {
    const [goToGame, setGoToGame] = React.useState(false);

    if (goToGame) {
        return <Navigate to="/game" />;
    }

  return (
    <div className='Home'>
        <img src="/images/Slime Rancher/Ventana_inicio.png" alt="Logo" />
        <button onClick={() => {setGoToGame(true);}}>Play</button>
    </div>
  );
}

export default Home;
