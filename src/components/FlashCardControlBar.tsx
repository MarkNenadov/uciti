"use client";

import React, {useState} from 'react';
import Select from 'react-select';
import { useFlashCardContext } from '../context/FlashCardContext';
import { useConfigurationContext } from '../context/ConfigurationContext';
import GenericModal from './base/GenericModal';
import GenericButton from './base/GenericButton';
import { NoteBanner } from "./NoteBanner"

// ThemedSelect wrapper for consistent styling
const selectClassNames = {
  control: () =>
    "bg-white text-black dark:bg-black dark:text-white border border-gray-300 dark:border-white rounded px-2 py-1 focus:ring-2 focus:ring-blue-500",
  menu: () =>
    "bg-white dark:bg-black border border-gray-300 dark:border-white rounded mt-1",
  menuList: () => "bg-white dark:bg-black",
  singleValue: () => "text-black dark:text-white",
  option: (state) => {
    if (state.isSelected) {
      return "bg-gray-200 text-black dark:bg-gray-700 dark:text-white px-2 py-1";
    }
    if (state.isFocused) {
      return "bg-gray-100 text-black dark:bg-gray-800 dark:text-white px-2 py-1";
    }
    return "bg-white text-black dark:bg-black dark:text-white cursor-pointer px-2 py-1";
  },
};

function ThemedSelect(props) {
  return <Select unstyled classNames={selectClassNames} {...props} />;
}

export function FlashCardControlBar() {
    const cardsPerPageOptions = [ {value: 4, label: "4" },  {value: 8, label: "8" },  {value: 10, label: "10" },  {value: 12, label: "12" }  ];
    const languageOptions = [ {value: "SR", label: "Srpski" },  {value: "DE", label: "Deutsch" } ];
    const yesNoOptions = [ {value: "true", label: "Yes" },  {value: "false", label: "No" } ];

    const { allFlashCards, shuffleCards } = useFlashCardContext();
    const { 
      currentLanguage, 
      setCurrentLanguage, 
      cardsPerPage, 
      setCardsPerPage, 
      hideEnglish, 
      setHideEnglish, 
      playMatchingGame, 
      setPlayMatchingGame 
    } = useConfigurationContext();
    
    const [isConfigurationOpen, setIsConfigurationOpen] = useState(false)

    return (
        <div className="flex flex-col lg:flex-row md:justify-between pl-7 pr-7 w-full">
        <div className="pb-5 lg:pb-0">
           {   
             allFlashCards.length > cardsPerPage && (
              <GenericButton
                text="Shuffle Cards"
                onClick={shuffleCards}
              />
             )
           }
         </div>
         <NoteBanner isFullWidth={false}> 
            <span>
              This is an open source project by <a className="text-blue-500 dark:text-white underline" href="https://marknenadov.com">Mark Nenadov</a>, 
              the React source is on <a className="text-blue-500 dark:text-white underline" href="https://github.com/MarkNenadov/uciti">GitHub</a>.
            </span>
        </NoteBanner>

        <div className="pb-5 lg:pb-0">
          <GenericButton 
                  text="⚙️"
                  onClick={ () => setIsConfigurationOpen( !isConfigurationOpen ) } 
                />
                  { isConfigurationOpen && (
                    <GenericModal 
                      title="Configuration"
                      closeHandler={()=> {setIsConfigurationOpen(false)}}
                    >
                      <div className="pb-2 md:pb-5">
                        <label htmlFor={"playMatchingGame"} className="dark:text-white text-sm">Play Matching Game?</label>
                        <ThemedSelect 
                              id={"playMatchingGame"}
                              aria-label={"Hide English?"}
                              value={ yesNoOptions.find( e => e.value === "" + playMatchingGame ) } 
                              options={ yesNoOptions } 
                              onChange={ ( option ) => {
                                  setPlayMatchingGame( option.value === "true" )
                              } }
                        />
                      </div>

                      <div className="pb-2 md:pb-5">
                        <label htmlFor={"currentLangauge"} className="dark:text-white text-sm">Practice Language</label>
                        <ThemedSelect 
                              id={"currentLanguage"}
                              aria-label={"Select Language"}
                              value={languageOptions.find( l => l.value === currentLanguage )} 
                              options={ languageOptions } 
                              onChange={ ( option ) => {
                                  setCurrentLanguage( option.value )
                              } }
                        />
                      </div>

                      <div className="pb-2 md:pb-5">
                        <label htmlFor={"hideEnglish"} className="dark:text-white text-sm">Hide English?</label>
                        <ThemedSelect 
                              id={"hideEnglish"}
                              aria-label={"Hide English?"}
                              value={ yesNoOptions.find( e => e.value === "" + hideEnglish ) } 
                              options={ yesNoOptions } 
                              onChange={ ( option ) => {
                                  setHideEnglish( option.value === "true" )
                              } }
                        />
                      </div>
                      <div className="pb-2 md:pb-5">
                        <label className="dark:text-white text-sm" htmlFor={"Cards Per Page"}>Cards Per Page</label>
                        <ThemedSelect 
                          aria-label={"Cards Per Page"} 
                          value={cardsPerPageOptions.find( c => c.value === cardsPerPage )} 
                          options={ cardsPerPageOptions } 
                          onChange={ ( option ) => {
                            setCardsPerPage( option.value )
                          } }
                        />
                      </div>
                    </GenericModal>
                ) }
              </div>
       </div> 
 
    )
}