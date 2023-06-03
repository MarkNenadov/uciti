import { FlashCardStack } from './Components/FlashCardStack';
import { FlashCardControlBar } from './Components/FlashCardControlBar';
import { FlashCard, hasDuplicates } from './Model/FlashCard'
import React, { useEffect, useMemo, useState } from 'react';
import { pickRandomItems } from './Utils/RandomUtils';
import { getAllFlashCards } from "./FlashCardData";
import { NoteBanner } from "./Components/NoteBanner"

function App() {
  const allFlashCards: FlashCard[] = useMemo( () => getAllFlashCards(), [] );

  const [cardsPerPage, setCardsPerPage] = useState( 5 );
  const [startingLanguage, setStartingLanguage] = useState( "SR" );
  const [selectedFlashCards, setSelectedFlashCards] = useState( pickRandomItems( allFlashCards, cardsPerPage ) );

  useEffect( () => {
    if ( hasDuplicates( allFlashCards ) ) {
      alert( "Warning duplicate flashcard detected" );
    }
    setSelectedFlashCards( pickRandomItems( allFlashCards, cardsPerPage ) );
  }, [cardsPerPage, allFlashCards]);

  return (
    <div className="border-2 rounded-lg w-7/8 m-6 p-6">
      <header className="App-heade">
        <p className="text-3xl">
          učiti - (transitive) to teach, instruct, educate
        </p>
      </header>

      <NoteBanner text={ "Click cards to switch lanaguage" } /> 

      <FlashCardStack 
        flashCards={ selectedFlashCards } 
        startingLanguage={ startingLanguage }
      />

      <FlashCardControlBar 
        setStartingLanguage={ setStartingLanguage} 
        startingLanguage={ startingLanguage }
        setCardsPerPage={ setCardsPerPage } 
        cardsPerPage={ cardsPerPage } 
        cardCount={ allFlashCards.length }
        shuffleCards={ () => { 
          setSelectedFlashCards( pickRandomItems( allFlashCards, cardsPerPage ) );
        } }
      />

  <NoteBanner isFullWidth={true}> 
    <span>This is an open source project, the React source is on <a className="text-blue-500 underline" href="https://github.com/MarkNenadov/uciti">GitHub</a>.</span>
  </NoteBanner>

    </div>
  );
}

export default App;