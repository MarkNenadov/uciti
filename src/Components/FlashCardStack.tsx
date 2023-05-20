import React from 'react';
import { FlashCardView } from './FlashCardView';
import { FlashCard } from '../Model/FlashCard'

interface FlashCardStackProps {
    flashCards: FlashCard[]
    startingLanguage: string;
}

export function FlashCardStack( {flashCards, startingLanguage}: FlashCardStackProps ) {
    return (
        <div  className="flex flex-wrap border-2 rounded-lg w-7/8 m-6 p-6">
            {
                flashCards.map( ( flashCard: FlashCard ) => (
                    <FlashCardView 
                        key={'viewFor' + flashCard.englishTranslation} 
                        flashCard={ flashCard } 
                        startingLanguage={ startingLanguage }
                    />
                ) )
            }
        </div>
    )
}