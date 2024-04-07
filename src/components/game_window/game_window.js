import React, { useState } from 'react';
import './game_window.css';
import Hidden_Word from '../hidden_word/hidden_word';
import ErrorCounter from '../error_counter/error_counter'; 

function GameWindow() {
    const [errorCount, setErrorCount] = useState(0);

    // Fonction pour mettre à jour le nombre d'erreurs
    const updateErrorCount = (count) => {
        setErrorCount(count);
        console.log('Nombre d\'erreurs :', count);
    };

    return (
        <div className="game-window">
            <Hidden_Word onUpdateErrorCount={updateErrorCount} />
        </div>
    );
}

export default GameWindow;
