import React, { createContext, useState, useContext } from 'react';


interface ConfigurationContextType {
  currentLanguage: string,
  cardsPerPage: number,
  hideEnglish: boolean,
  playMatchingGame: boolean,
  setCardsPerPage: React.Dispatch<React.SetStateAction<number>>;
  setCurrentLanguage: React.Dispatch<React.SetStateAction<string>>;
  setHideEnglish: React.Dispatch<React.SetStateAction<boolean>>;
  setPlayMatchingGame: React.Dispatch<React.SetStateAction<boolean>>;
}

const ConfigurationContext = createContext<ConfigurationContextType | undefined>(undefined);

export const ConfigurationProvider = ({ children }) => {
    const [playMatchingGame, setPlayMatchingGame] = useState( false );
    const [hideEnglish, setHideEnglish] = useState( true );
    const [cardsPerPage, setCardsPerPage] = useState( 4 );
    const [currentLanguage, setCurrentLanguage] = useState( "SR" );
      
    const contextValue = {
        cardsPerPage,
        setCardsPerPage,
        currentLanguage,
        setCurrentLanguage,
        hideEnglish,
        setHideEnglish,
        setPlayMatchingGame,
        playMatchingGame
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