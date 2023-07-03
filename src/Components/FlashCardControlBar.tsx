import React from 'react';
import Select from 'react-select';
import { useFlashCardContext } from '../Context/FlashCardContext';
import { useConfigurationContext } from '../Context/ConfigurationContext';

export function FlashCardControlBar() {
    const cardsPerPageOptions = [ {value: 4, label: "4" },  {value: 8, label: "8" },  {value: 10, label: "10" },  {value: 12, label: "12" }  ];
    const languageOptions = [ {value: "SR", label: "Srpski" },  {value: "DE", label: "Deutsch" } ];
    const yesNoOptions = [ {value: "true", label: "Yes" },  {value: "false", label: "No" } ];

    const { allFlashCards, shuffleCards } = useFlashCardContext();
    const { currentLanguage, setCurrentLanguage, cardsPerPage, setCardsPerPage, hideEnglish, setHideEnglish, playMatchingGame, setPlayMatchingGame } = useConfigurationContext();

    return (
        <div className="flex flex-col lg:flex-row md:justify-between pl-7 pr-7 w-full">
        <div className="pb-5 lg:pb-0">
           {   
             allFlashCards.length > cardsPerPage && (
               <div 
                    aria-label={"Shuffle Cards"}
                    onClick={ () => { shuffleCards() } } 
                    className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center lg:text-left w-full lg:mt-6"
                >
                    Shuffle Cards
            </div>
             )
           }
         </div>
         <div className="pb-5 md:pb-0">
           <label htmlFor={"playMatchingGame"}>Play Matching Game?</label>
           <Select 
                id={"playMatchingGame"}
                aria-label={"Hide English?"}
                 value={ yesNoOptions.find( e => e.value === "" + playMatchingGame ) } 
                 options={ yesNoOptions } 
                 onChange={ ( option ) => {
                    setPlayMatchingGame( option.value === "true" )
                } }
           />
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
                 value={ yesNoOptions.find( e => e.value === "" + hideEnglish ) } 
                 options={ yesNoOptions } 
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