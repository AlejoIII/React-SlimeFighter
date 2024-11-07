import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";

function App () {
  return(
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/game' element={<Game />}/>
          <Route/>
        </Routes>
      </Router>
    </div>
  );
}

export default App


