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
        <div  
          className="text-5xl flex justify-between cursor-pointer border-1 rounded-lg m-6 p-6 bg-emerald-100 hover:bg-emerald-200" 
          onClick={() => { setShowSerbian(!showSerbian); }}
        >
          <div className="overflow-wrap break-word ">
            {showSerbian && flashCard.serbianTranslation}
            {!showSerbian && flashCard.englishTranslation}
          </div>
        </div>
      )
      
}