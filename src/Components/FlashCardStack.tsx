import React, { useState } from 'react';
import { FlashCardView } from './FlashCardView';
import { MatchCardView } from './MatchCardView';
import { FlashCard, hasDuplicates } from '../Model/FlashCard'
import { NoteBanner } from './NoteBanner';
import { useFlashCardContext } from '../Context/FlashCardContext';
import { useConfigurationContext } from '../Context/ConfigurationContext';
import { shuffleArray } from './../Utils/RandomUtils';

export function FlashCardStack() {
    const { selectedFlashCards, setSelectedFlashCards  } = useFlashCardContext();
    const { hideEnglish, playMatchingGame } = useConfigurationContext();

    const [currentChoice, setCurrenChoice] = useState(undefined);
    const [currentSide, setCurrentSide] = useState("");

    if ( hasDuplicates( selectedFlashCards ) ) {
        return ( 
            <NoteBanner isFullWidth={true}> 
                <span>Warning: Duplicate flash card present. Not rendering stack.</span>
            </NoteBanner>
        )
    }

    const matchCardHandler = ( flashCard: FlashCard, side: string ) => {
        if ( !currentChoice ) { 
            setCurrenChoice( flashCard ); 
            setCurrentSide( side );
        } else {
            if ( flashCard.english === currentChoice.english && side !== currentSide ) {
                const updatedFlashCards = selectedFlashCards.filter( card => card.english !== flashCard.english )
                
                setSelectedFlashCards( updatedFlashCards );
            }
            setCurrenChoice( undefined );
        } 
    }
    
    return (
            playMatchingGame ?
            (
                <div className="flex flex-row w-full">
                    <div className="w-1/2 flex flex-col items-end">
                        {
                        shuffleArray( selectedFlashCards ).map( ( flashCard: FlashCard ) => (
                            <MatchCardView 
                                key={'viewFor' + flashCard.english} 
                                flashCard={ flashCard } 
                                language={ "BLAH" }
                                callback={ () => {  
                                    matchCardHandler( flashCard, "left" );
                                }}
                            />
                        ) )
                    }
                </div>
                <div className="w-1/2 flex flex-col items-begin">
                    {
                        shuffleArray( selectedFlashCards ).map( ( flashCard: FlashCard ) => (
                            <MatchCardView 
                                key={'viewFor' + flashCard.english} 
                                flashCard={ flashCard } 
                                language={ "EN" }
                                callback={ () => {  
                                    matchCardHandler( flashCard, "right" );
                                }}
                            />
                        ) )
                    }
                </div>
            </div>
        )
        :
        (
            <div className="flex flex-wrap border-2 rounded-lg w-7/8 m-6 p-6">
                {
                    selectedFlashCards.map( ( flashCard: FlashCard ) => (
                        <FlashCardView 
                            key={'viewFor' + flashCard.english} 
                            flashCard={ flashCard } 
                            hideEnglish={ hideEnglish }
                        />
                    ) )
                }
            </div>
            )
    );
}