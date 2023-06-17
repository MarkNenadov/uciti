import { FlashCardStack } from './Components/FlashCardStack';
import { FlashCardControlBar } from './Components/FlashCardControlBar';
import React from 'react';
import { Notes } from "./Components/Notes"
import { NoteBanner } from "./Components/NoteBanner"
import { FlashCardProvider } from './Context/FlashCardContext';
import { ConfigurationProvider } from './Context/ConfigurationContext';

function App() {
  return (
    <div className="border-2 rounded-lg w-7/8 m-6 p-6">
        <header className="App-heade">
          <p className="text-3xl">
            učiti - (transitive) to teach, instruct, educate
          </p>
        </header>

        <ConfigurationProvider>
          <Notes />
          <FlashCardProvider>
            <FlashCardStack />
            <FlashCardControlBar />
          </FlashCardProvider>
        </ConfigurationProvider>

      <NoteBanner isFullWidth={true}> 
        <span>This is an open source project, the React source is on <a className="text-blue-500 underline" href="https://github.com/MarkNenadov/uciti">GitHub</a>.</span>
      </NoteBanner>
    </div>
  );
}

export default App;