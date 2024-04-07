
import './App.css';
import Header from '../header/header';
import GameWindow from '../game_window/game_window';

import React, { useState, useEffect } from 'react';

function App() {
    return (
        <div className="App">
          <Header />
          <GameWindow />
        </div>
    );
}

export default App;
