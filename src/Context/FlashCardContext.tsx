import React, { createContext, useState, useMemo, useEffect, useContext } from 'react';
import { pickRandomItems } from './../Utils/RandomUtils';
import { getAllFlashCards } from "./../FlashCardData";
import { FlashCard, hasDuplicates } from './../Model/FlashCard'
import { useConfigurationContext } from './ConfigurationContext';

interface FlashCardContextType {
    allFlashCards: FlashCard[];
    selectedFlashCards: FlashCard[];
    shuffleCards: () => void;
}

const FlashCardContext = createContext<FlashCardContextType | undefined>(undefined);

export const FlashCardProvider = ({ children }) => {
    const { currentLanguage, cardsPerPage} = useConfigurationContext();

    const allFlashCards: FlashCard[] = useMemo( () => getAllFlashCards( currentLanguage ), [currentLanguage] );
    const [selectedFlashCards, setSelectedFlashCards] = useState( pickRandomItems( allFlashCards, cardsPerPage ) );

    const shuffleCards = () => { 
        setSelectedFlashCards( pickRandomItems( allFlashCards, cardsPerPage ) );
      };
  
    useEffect( () => {
        if ( hasDuplicates( allFlashCards ) ) {
          alert( "Warning duplicate flashcard detected" );
        }
        setSelectedFlashCards( pickRandomItems( allFlashCards, cardsPerPage ) );
      }, [cardsPerPage, allFlashCards]);

      
    const contextValue = {
        allFlashCards,
        selectedFlashCards,
        shuffleCards
    };

    return <FlashCardContext.Provider value={contextValue}>
        {children}</FlashCardContext.Provider>;
};

export const useFlashCardContext = () => useContext(FlashCardContext);