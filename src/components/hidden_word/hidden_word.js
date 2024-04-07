    import './hidden_word.css';
    import React, { useState, useEffect } from 'react';
    import Keyboard from '../keyboard/keyboard';
    import ErrorCounter from '../error_counter/error_counter';
    import Image from '../image/image';

    function Hidden_Word() {
    const [hiddenWord, setHiddenWord] = useState(null);
    const [visibleWord, setVisibleWord] = useState(null);
    const [errorCount, setErrorCount] = useState(0);
        const [gameState, setGameState] = useState('en_cours'); 


    useEffect(() => {
        setGameState('en_cours'); 
        const fetchData = async () => {
        try {
            const requestBody = {
            locale: "fr-FR"
            };

            const response = await fetch('https://node-hangman-api-production.up.railway.app/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                locale: "fr-FR"
            }),
            });

            const data = await response.json();
            if (data && data.word) {
            const word = data.word;
            const hidden = word.split('').map(() => '_').join('');
            setHiddenWord(word); 
            setVisibleWord(hidden); 
            }
        } catch (error) {
            console.error(error);
        }
        };
        fetchData();
    }, []);

    const checkLetter = (letter) => {
        console.log(gameState);
        if (gameState !== 'en_cours') return; 

        letter = letter.toLowerCase();
        const word = hiddenWord.split('');
        const visible = visibleWord.split('');
        let found = false;
        word.forEach((l, index) => {
        if (l === letter) {
            visible[index] = letter;
            found = true;
        }
        });

        setVisibleWord(visible.join(''));   

        if (!visible.includes('_')) {
        document.querySelector('.foundWord').innerHTML = '<p>Bravo ! Vous avez trouvé le mot !<p>';
        setGameState('gagne'); 
        console.log(gameState);
        document.querySelectorAll('.keyboard button').forEach(button => button.disabled = true); 
        }

        if (!found) {
        console.log('La lettre n\'est pas dans le mot !');
        setErrorCount(errorCount + 1);
        if (errorCount + 1 >= 7) {
            document.querySelector('.foundWord').innerHTML = '<p>Perdu ! Le mot était : ' + hiddenWord + '<p>';
            setGameState('perdu'); 
            console.log(gameState);
            document.querySelectorAll('.keyboard button').forEach(button => button.disabled = true); 
        }
        }
    };
    

    return (
        <header className="App-header">
        <Image errorCount={errorCount} />
        <p className="Word">{visibleWord}</p>
        <div className="foundWord"></div>
        <Keyboard onLetterClick={checkLetter} disabled={gameState !== 'en_cours'} />
        <ErrorCounter errorCount={errorCount} />

        </header>
    );
    }

    export default Hidden_Word;
