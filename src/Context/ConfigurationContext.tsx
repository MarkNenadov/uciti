import React, { createContext, useState, useContext } from 'react';


interface ConfigurationContextType {
  currentLanguage: string,
  cardsPerPage: number,
  hideEnglish: boolean,
  setCardsPerPage: any,
  setCurrentLanguage: any,
  setHideEnglish: any
}

const ConfigurationContext = createContext<ConfigurationContextType | undefined>(undefined);

export const ConfigurationProvider = ({ children }) => {
    const [hideEnglish, setHideEnglish] = useState( true );
    const [cardsPerPage, setCardsPerPage] = useState( 5 );
    const [currentLanguage, setCurrentLanguage] = useState( "SR" );
      
    const contextValue = {
        cardsPerPage,
        setCardsPerPage,
        currentLanguage,
        setCurrentLanguage,
        hideEnglish,
        setHideEnglish
      };

    return (
      <ConfigurationContext.Provider 
        value={contextValue}
      >
        {children}
      </ConfigurationContext.Provider>
    );
};

export const useConfigurationContext = () => useContext(ConfigurationContext);