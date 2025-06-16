"use client";

import React, { createContext, useState, useMemo, useEffect, useContext, useCallback } from 'react';
import { pickRandomItems, shuffleArray } from './../utils/RandomUtils';
import { getAllFlashCards } from "../data/FlashCardData";
import { FlashCard, hasDuplicates } from './../model/FlashCard'
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

interface FlashCardProviderProps {
    children: React.ReactNode;
}

export const FlashCardProvider: React.FC<FlashCardProviderProps> = ({ children }) => {
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