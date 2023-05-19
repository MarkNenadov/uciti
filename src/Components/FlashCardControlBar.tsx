import Select from 'react-select';

interface FlashCardStackProps {
    setStartingLanguage: ( value: string ) => void;
    startingLanguage: string;
    setCardsPerPage: ( value: number ) => void;
    cardsPerPage: number;
    cardCount: number;
    shuffleCards: ( cardsPerPage: number ) => void;
}

export function FlashCardControlBar( props: FlashCardStackProps ) {
    const {startingLanguage, setStartingLanguage, setCardsPerPage, cardsPerPage, cardCount, shuffleCards} = props;
    const cardsPerPageOptions = [ {value: 1, label: "1" },  {value: 3, label: "3" },  {value: 5, label: "5" }  ];
    const languageOptions = [ {value: "SR", label: "Srpski" },  {value: "EN", label: "English" }  ];
  
    return (
        <div className="flex justify-between pl-7 pr-7 w-full">
        <div>
           { 
             cardCount > cardsPerPage && (
               <div 
                     onClick={ () => { shuffleCards( cardsPerPage ) } } 
                    className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Shuffle Cards
            </div>
             )
           }
         </div>
         <div>        
           <label>Starting Language</label>
           <Select 
             value={languageOptions.find( l => l.value === startingLanguage )} 
             options={ languageOptions } 
             onChange={ ( option ) => {
               setStartingLanguage( option.value )
             } }
           />
         </div>
         <div>        
           <label>Cards Per Page</label>
           <Select 
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