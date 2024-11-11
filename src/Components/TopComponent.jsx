import React from 'react';

function TopComponent({ vidasJugador1, vidasJugador2, atributoSeleccionado, resultado }) {
  return (
    <div className="top-component">
      <div>
        <div className="vidas">
          {vidasJugador1.map((vida, index) => (
            vida ? <img key={index} src={"/images/Slime Rancher/Gemas/gema_dorada.png"} alt={`Vida ${index + 1}`} /> : null
          ))}
        </div>
      </div>
      <div className='atributo'>
      <h3>{atributoSeleccionado}</h3>
      </div>
      <div>
        <div className="vidas">
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

