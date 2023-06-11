import React from 'react';
import { FlashCardView } from './FlashCardView';
import { FlashCard, hasDuplicates } from '../Model/FlashCard'
import { NoteBanner } from './NoteBanner';

interface FlashCardStackProps {
    flashCards: FlashCard[]
    hideEnglish: boolean;
}

export function FlashCardStack( {flashCards, hideEnglish}: FlashCardStackProps ) {
    if ( hasDuplicates( flashCards ) ) {
        return ( 
            <NoteBanner isFullWidth={true}> 
                <span>Warning: Duplicate flash card present. Not rendering stack.</span>
            </NoteBanner>
        )
    }
    
    return (
        <div  className="flex flex-wrap border-2 rounded-lg w-7/8 m-6 p-6">
            {
                flashCards.map( ( flashCard: FlashCard ) => (
                    <FlashCardView 
                        key={'viewFor' + flashCard.english} 
                        flashCard={ flashCard } 
                        hideEnglish={ hideEnglish }
                    />
                ) )
            }
        </div>
    )
}