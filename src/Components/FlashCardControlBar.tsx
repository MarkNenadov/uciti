import React from 'react';
import Select from 'react-select';
import OptionsType from 'react-select';

interface FlashCardStackProps {
    setCurrentLanguage: ( value: string ) => void;
    currentLanguage: string;
    setHideEnglish: ( value: boolean ) => void;
    hideEnglish: boolean;
    setCardsPerPage: ( value: number ) => void;
    cardsPerPage: number;
    cardCount: number;
    shuffleCards: ( cardsPerPage: number ) => void;
}

export function FlashCardControlBar( {currentLanguage, setCurrentLanguage, hideEnglish, setHideEnglish, setCardsPerPage, cardsPerPage, cardCount, shuffleCards}: FlashCardStackProps ) {
    const cardsPerPageOptions = [ {value: 1, label: "1" },  {value: 3, label: "3" },  {value: 5, label: "5" },  {value: 10, label: "10" }  ];
    const languageOptions = [ {value: "SR", label: "Srpski" },  {value: "DE", label: "Deutsch" } ];
    const hideEnglishOptions = [ {value: "true", label: "Yes" },  {value: "false", label: "No" } ];

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
           <label htmlFor={"currentLangauge"}>Practice Language</label>
           <Select 
                id={"currentLanguage"}
                aria-label={"Select Language"}
                 value={languageOptions.find( l => l.value === currentLanguage )} 
                 options={ languageOptions } 
                 onChange={ ( option ) => {
                    setCurrentLanguage( option.value )
                } }
           />
         </div>

         <div className="pb-5 md:pb-0">
           <label htmlFor={"hideEnglish"}>Hide English?</label>
           <Select 
                id={"hideEnglish"}
                aria-label={"Hide English?"}
                 value={ hideEnglishOptions.find( e => e.value === "" + hideEnglish ) } 
                 options={ hideEnglishOptions } 
                 onChange={ ( option ) => {
                    setHideEnglish( option.value === "true" )
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