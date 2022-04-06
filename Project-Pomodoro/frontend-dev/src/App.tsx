import React from 'react';
import { PomodoroTimer } from './components/PomodoroTimer';

function App(): JSX.Element {
  return (
    <div className="APP">
      <PomodoroTimer defualtPomodoroTimer={1500} />
      <p>this time!</p>
    </div>
  );
}

export default App;
