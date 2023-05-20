import React, { useState, useEffect } from 'react';
import { FlashCard } from '../Model/FlashCard'

interface FlashCardProps {
    flashCard: FlashCard
    startingLanguage: string
}

export function FlashCardView( {flashCard, startingLanguage}: FlashCardProps ) {
    const [showSerbian, setShowSerbian] = useState( startingLanguage === "SR" );

    useEffect( () => {
        setShowSerbian( startingLanguage === "SR")
    }, [startingLanguage] );

    return (
        <div>
            <div  
                className="flex justify-between cursor-pointer border-1 rounded-lg w-64 m-6 p-6 bg-emerald-100 hover:bg-emerald-200" 
                onClick={ () => { setShowSerbian( !showSerbian );} }
            >
                <div>
                    { showSerbian && flashCard.serbianTranslation }
                    { !showSerbian && flashCard.englishTranslation }
                </div>
            </div>
        </div>
    )
}