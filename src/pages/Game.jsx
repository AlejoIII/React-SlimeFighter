import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Game.css'
import { BottomComponent } from "../Components/BottomComponent.jsx";
import { TopComponent } from "../Components/TopComponent.jsx";
import { BodyComponent } from "../Components/BodyComponent.jsx";



function Game () {

  return (
    <div className="Game">
      <TopComponent />
      <BodyComponent />
      <BottomComponent />
    </div>
  );
}
export default Game;
