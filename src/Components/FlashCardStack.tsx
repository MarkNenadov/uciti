import { FlashCardView } from './FlashCardView';
import { FlashCard } from '../Model/FlashCard'


interface FlashCardStackProps {
    flashCards: FlashCard[]
    startingLanguage: string;
}

export function FlashCardStack( props: FlashCardStackProps ) {
    const {flashCards, startingLanguage} = props;
    return (
        <div  className="flex flex-row border-2 rounded-lg w-7/8 m-6 p-6">
            {
                flashCards.map( ( flashCard: FlashCard, index: number ) => (
                    <FlashCardView 
                        key={index} 
                        flashCard={ flashCard } 
                        startingLanguage={ startingLanguage }  
                    />
                ) )
            }
        </div>
    )
}