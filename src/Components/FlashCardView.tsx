//@ts-ignore
import React, { useState, useEffect } from 'react';
import { FlashCard } from '../Model/FlashCard'

interface FlashCardProps {
    flashCard: FlashCard
    startingLanguage: string
}

export function FlashCardView( props: FlashCardProps ) {
    const {flashCard, startingLanguage} = props;
    const [showSerbian, setShowSerbian] = useState( startingLanguage === "SR" );

    useEffect( () => {
        setShowSerbian( startingLanguage === "SR")
    }, [startingLanguage] );

    return (
        <div>
            <div  
                className="cursor-pointer border-1 rounded-lg w-64 m-6 p-6 bg-emerald-100 hover:bg-emerald-200" 
                onClick={ () => { setShowSerbian( !showSerbian );} }
            >
                { showSerbian && flashCard.serbianTranslation }
                { !showSerbian && flashCard.englishTranslation }
            </div>
        </div>
    )
}