import React from 'react';
// Componente que se encarga de mostrar las vidas de los jugadores, el atributo seleccionado y el resultado de la pelea
function TopComponent({ vidasJugador1, vidasJugador2, atributoSeleccionado, resultado }) {
  return (
    <div className="top-component">
      <div>
        <div className="vidas1">
          {vidasJugador1.map((vida, index) => (
            vida ? <img key={index} src={"/images/Slime Rancher/Gemas/gema_dorada.png"} alt={`Vida ${index + 1}`} /> : null
          ))}
        </div>
      </div>
      <div className='atributo'>
      <h3>{atributoSeleccionado}</h3>
      </div>
      <div>
        <div className="vidas2">
          {vidasJugador2.map((vida, index) => (
            vida ? <img key={index} src={"/images/Slime Rancher/Gemas/gema_dorada.png"} alt={`Vida ${index + 1}`} /> : null
          ))}
        </div>
      </div>
      <div className="resultado">       
        <h3>{resultado}</h3>
      </div>
    </div>
  );
}

export default TopComponent;

