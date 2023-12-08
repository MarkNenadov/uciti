import { FlashCardStack } from './Components/FlashCardStack';
import { FlashCardControlBar } from './Components/FlashCardControlBar';
import React from 'react';
import { Notes } from "./Components/Notes"
import { NoteBanner } from "./Components/NoteBanner"
import { FlashCardProvider } from './Context/FlashCardContext';
import { ConfigurationProvider } from './Context/ConfigurationContext';

function App() {
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

      <NoteBanner isFullWidth={true}> 
        <span>
          This is an open source project by <a className="text-blue-500 dark:text-white underline" href="https://marknenadov.com">Mark Nenadov</a>, 
          the React source is on <a className="text-blue-500 dark:text-white underline" href="https://github.com/MarkNenadov/uciti">GitHub</a>.
          </span>
      </NoteBanner>
    </div>
  );
}

export default App;