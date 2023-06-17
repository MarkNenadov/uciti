/* eslint-disable no-template-curly-in-string */
import React from 'react';
import { FlashCard } from '../Model/FlashCard'

interface MatchCardProps {
    flashCard: FlashCard
    language: string 
    callback: any
}

export function MatchCardView( {flashCard, language, callback}: MatchCardProps ) {
    return (
        <div  
          className="text-4xl flex justify-between cursor-pointer border-1 rounded-lg m-6 p-6 bg-emerald-100 hover:bg-emerald-200 w-full lg:w-1/4" 
          onClick={ callback }
        >
          <div className="overflow-wrap break-word ">
            {language === "EN" && flashCard.english}
            {language !== "EN" && flashCard.translation}
          </div>
        </div>
      )
      
}