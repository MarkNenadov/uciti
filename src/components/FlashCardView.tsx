"use client";

import React, { useState, useEffect } from 'react';
import { FlashCard } from '../model/FlashCard'

interface FlashCardProps {
    flashCard: FlashCard
    hideEnglish: boolean
    preventFlip?: boolean
}

export function FlashCardView( {flashCard, hideEnglish, preventFlip}: FlashCardProps ) {
    const [showEnglish, setShowEnglish] = useState( !hideEnglish );

    useEffect( () => {
        setShowEnglish( !hideEnglish )
    }, [hideEnglish] );

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (!preventFlip && (event.key === 'Enter' || event.key === ' ')) {
            event.preventDefault();
            setShowEnglish(!showEnglish);
        }
    };

    return (
        <div  
          className={`min-h-[2.75rem] text-2xl lg:text-4xl flex justify-between items-center ${preventFlip ? '' : 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50'} border-1 rounded-lg m-6 px-4 py-1 lg:px-6 lg:py-1 bg-emerald-100 dark:bg-black dark:border dark:border-1 dark:border-white hover:bg-emerald-200 dark:hover:bg-gray-800 dark:text-white w-full lg:w-1/4 overflow-hidden`} 
          onClick={() => { if ( !preventFlip ) { setShowEnglish(!showEnglish); }}}
          onKeyDown={handleKeyDown}
          tabIndex={preventFlip ? -1 : 0}
          role={preventFlip ? "text" : "button"}
          aria-label={preventFlip ? undefined : `Flashcard: ${showEnglish ? flashCard.english : flashCard.translation}. Press Enter or Space to flip.`}
          aria-pressed={preventFlip ? undefined : !showEnglish}
        >
          <div className="overflow-wrap break-word text-center flex-grow py-1">
            {showEnglish ? flashCard.english : flashCard.translation}
          </div>
        </div>
      )
      
}