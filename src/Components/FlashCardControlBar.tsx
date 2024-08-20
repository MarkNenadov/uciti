import React, {useState} from 'react';
import Select from 'react-select';
import { useFlashCardContext } from '../Context/FlashCardContext';
import { useConfigurationContext } from '../Context/ConfigurationContext';
import GenericModal from './base/GenericModal';
import GenericButton from './base/GenericButton';
import { NoteBanner } from "./NoteBanner"

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
                        <Select 
                              id={"playMatchingGame"}
                              aria-label={"Hide English?"}
                              value={ yesNoOptions.find( e => e.value === "" + playMatchingGame ) } 
                              options={ yesNoOptions } 
                              onChange={ ( option ) => {
                                  setPlayMatchingGame( option.value === "true" )
                              } }
                              classNames={{
                                control: () => "bg-black text-white",
                              }}
                        />
                      </div>

                      <div className="pb-2 md:pb-5">
                        <label htmlFor={"currentLangauge"} className="dark:text-white text-sm">Practice Language</label>
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

                      <div className="pb-2 md:pb-5">
                        <label htmlFor={"hideEnglish"} className="dark:text-white text-sm">Hide English?</label>
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
                      <div className="pb-2 md:pb-5">
                        <label className="dark:text-white text-sm" htmlFor={"Cards Per Page"}>Cards Per Page</label>
                        <Select 
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