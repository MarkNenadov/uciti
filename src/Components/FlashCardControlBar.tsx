import React from 'react';
import Select from 'react-select';

interface FlashCardStackProps {
    setStartingLanguage: ( value: string ) => void;
    startingLanguage: string;
    setCardsPerPage: ( value: number ) => void;
    cardsPerPage: number;
    cardCount: number;
    shuffleCards: ( cardsPerPage: number ) => void;
}

export function FlashCardControlBar( {startingLanguage, setStartingLanguage, setCardsPerPage, cardsPerPage, cardCount, shuffleCards}: FlashCardStackProps ) {
    const cardsPerPageOptions = [ {value: 1, label: "1" },  {value: 3, label: "3" },  {value: 5, label: "5" }  ];
    const languageOptions = [ {value: "SR", label: "Srpski" },  {value: "EN", label: "English" }  ];
  
    return (
        <div className="flex flex-col md:flex-row md:justify-between pl-7 pr-7 w-full">
        <div className="pb-5 md:pb-0">
           { 
             cardCount > cardsPerPage && (
               <div 
                    aria-label={"Shuffle Cards"}
                     onClick={ () => { shuffleCards( cardsPerPage ) } } 
                    className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center lg:text-left w-full"
                >
                    Shuffle Cards
            </div>
             )
           }
         </div>
         <div className="pb-5 md:pb-0">
           <label htmlFor={"startingLanguage"}>Starting Language</label>
           <Select 
                id={"startingLanguage"}
                aria-label={"Select Starting Language"}
                 value={languageOptions.find( l => l.value === startingLanguage )} 
                 options={ languageOptions } 
                 onChange={ ( option ) => {
                    setStartingLanguage( option.value )
                } }
           />
         </div>
         <div className="pb-5 md:pb-0">
           <label>Cards Per Page</label>
           <Select 
             aria-label={"Cards Per Page"} 
             value={cardsPerPageOptions.find( c => c.value === cardsPerPage )} 
             options={ cardsPerPageOptions } 
             onChange={ ( option ) => {
               setCardsPerPage( option.value )
             } }
           />
         </div>
       </div> 
 
    )
}