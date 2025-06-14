"use client";

/* eslint-disable no-template-curly-in-string */
import React, { useState, useEffect } from 'react';
import { FlashCard } from '../model/FlashCard'

interface FlashCardProps {
    flashCard: FlashCard
    hideEnglish: boolean
    preventFlip?: boolean
}

export function FlashCardView( {flashCard, hideEnglish, preventFlip}: FlashCardProps ) {
    const [showEnglish, setShowEnglish] = useState( !hideEnglish );
    const [isClient, setIsClient] = useState(false);

    useEffect( () => {
        setShowEnglish( !hideEnglish )
    }, [hideEnglish] );

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div  
          className={`text-4xl flex justify-between ${preventFlip ? '' : 'cursor-pointer'} border-1 rounded-lg m-6 p-6 bg-emerald-100 dark:bg-black dark:border dark:border-1 dark:border-white hover:bg-emerald-200 dark:hover:bg-gray-800 dark:text-white w-full lg:w-1/4`} 
          onClick={() => { if ( !preventFlip ) { setShowEnglish(!showEnglish); }}}
        >
          <div className="overflow-wrap break-word ">
            {isClient && showEnglish && flashCard.english}
            {isClient && !showEnglish && flashCard.translation}
          </div>
        </div>
      )
      
}