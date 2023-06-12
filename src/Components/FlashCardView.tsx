import React, { useState, useEffect } from 'react';
import { FlashCard } from '../Model/FlashCard'

interface FlashCardProps {
    flashCard: FlashCard
    hideEnglish: boolean
}

export function FlashCardView( {flashCard, hideEnglish}: FlashCardProps ) {
    const [showEnglish, setShowEnglish] = useState( !hideEnglish );

    useEffect( () => {
        setShowEnglish( !hideEnglish )
    }, [hideEnglish] );

    return (
        <div  
          className="text-4xl flex justify-between cursor-pointer border-1 rounded-lg m-6 p-6 bg-emerald-100 hover:bg-emerald-200 w-full lg:w-1/4" 
          onClick={() => { setShowEnglish(!showEnglish); }}
        >
          <div className="overflow-wrap break-word ">
            {showEnglish && flashCard.english}
            {!showEnglish && flashCard.translation}
          </div>
        </div>
      )
      
}