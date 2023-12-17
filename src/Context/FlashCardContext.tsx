import React, { createContext, useState, useMemo, useEffect, useContext, useCallback } from 'react';
import { pickRandomItems, shuffleArray } from './../Utils/RandomUtils';
import { getAllFlashCards } from "../Data/FlashCardData";
import { FlashCard, hasDuplicates } from './../Model/FlashCard'
import { useConfigurationContext } from './ConfigurationContext';

interface FlashCardContextType {
    allFlashCards: FlashCard[];
    selectedFlashCards: FlashCard[];
    setSelectedFlashCards: React.Dispatch<React.SetStateAction<FlashCard[]>>;
    shuffleCards: () => void;
    leftMatchStack: FlashCard[];
    rightMatchStack: FlashCard[];
}

const FlashCardContext = createContext<FlashCardContextType | undefined>(undefined);

export const FlashCardProvider = ({ children }) => {
    const { currentLanguage, cardsPerPage} = useConfigurationContext();

    const allFlashCards: FlashCard[] = useMemo( () => getAllFlashCards( currentLanguage ), [currentLanguage] );
    const pickRandomFlashCards: FlashCard[] 
        = useMemo( () => pickRandomItems( allFlashCards, cardsPerPage ), [allFlashCards, cardsPerPage] );
    const [selectedFlashCards, setSelectedFlashCards] = useState( pickRandomFlashCards );

    const [leftMatchStack, setLeftMatchStack] = useState<FlashCard[]>( shuffleArray( selectedFlashCards ));
    const [rightMatchStack, setRightMatchStack] = useState<FlashCard[]>( shuffleArray( selectedFlashCards ));

    const shuffleCards = useCallback(() => { 
        setSelectedFlashCards( pickRandomItems( allFlashCards, cardsPerPage ) );
      }, [allFlashCards, cardsPerPage]);
  
    useEffect( () => {
        if ( hasDuplicates( allFlashCards ) ) {
          alert( "Warning duplicate flashcard detected" );
        }
        setSelectedFlashCards( pickRandomItems( allFlashCards, cardsPerPage ) );
      }, [cardsPerPage, allFlashCards]);

      
    useEffect( () => {
        if ( selectedFlashCards.length === 0 ) {
            shuffleCards();
        }
    }, [ selectedFlashCards, shuffleCards ] );

    useEffect( () => {
        setLeftMatchStack( shuffleArray( selectedFlashCards ) );
        setRightMatchStack( shuffleArray( selectedFlashCards ) );
    }, [ selectedFlashCards ] );

    const contextValue = {
        allFlashCards,
        selectedFlashCards,
        setSelectedFlashCards,
        shuffleCards,
        leftMatchStack,
        rightMatchStack
    };

    return ( 
        <FlashCardContext.Provider 
            value={contextValue}
        >
            {children}
        </FlashCardContext.Provider>
    );
};

export const useFlashCardContext = () => useContext(FlashCardContext);