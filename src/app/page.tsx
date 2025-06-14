import { FlashCardStack } from '../components/FlashCardStack';
import { FlashCardControlBar } from '../components/FlashCardControlBar';
import React from 'react';
import { Notes } from "../components/Notes"
import { FlashCardProvider } from '../context/FlashCardContext';
import { ConfigurationProvider } from '../context/ConfigurationContext';

export default function Home() {
  return (
    <div className="border-2 rounded-lg w-7/8 m-6  pl-6 pr-6 bg-white dark:bg-black">
      <ConfigurationProvider>
        <header className="flex flex-col lg:flex-row lg:justify-between">
          <p className="text-3xl pt-4 dark:text-white">
            učiti - (transitive) to teach, instruct, educate
          </p>
          <Notes />
        </header>
        <FlashCardProvider>
          <FlashCardStack />
          <FlashCardControlBar />
        </FlashCardProvider>
      </ConfigurationProvider>
    </div>
  );
}
