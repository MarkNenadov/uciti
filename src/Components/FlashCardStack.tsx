import React from 'react';
import { FlashCardView } from './FlashCardView';
import { FlashCard, hasDuplicates } from '../Model/FlashCard'
import { NoteBanner } from './NoteBanner';
import { useFlashCardContext } from '../Context/FlashCardContext';
import { useConfigurationContext } from '../Context/ConfigurationContext';

export function FlashCardStack() {
    const { selectedFlashCards } = useFlashCardContext();
    const { hideEnglish } = useConfigurationContext();

    if ( hasDuplicates( selectedFlashCards ) ) {
        return ( 
            <NoteBanner isFullWidth={true}> 
                <span>Warning: Duplicate flash card present. Not rendering stack.</span>
            </NoteBanner>
        )
    }
    
    return (
        <div  className="flex flex-wrap border-2 rounded-lg w-7/8 m-6 p-6">
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
}