//@ts-ignore
import React from 'react';
import { NoteBanner } from "./NoteBanner"
import { useConfigurationContext } from '../Context/ConfigurationContext';

interface NotesProps {
}

export function Notes( props: NotesProps ) {
    const { playMatchingGame } = useConfigurationContext();


    return (
        <>
            {
                !playMatchingGame && <NoteBanner text={ "Click cards to switch lanaguage" } /> 
            }

            {
                playMatchingGame && <NoteBanner text={ "Consecutively click on matching cards to make them disappear until your hand is refreshed." } /> 
            }
        </>
    )
}