import React, { useState } from 'react';
import { Button } from './components/Botton';
import { PomodoroTimer } from './components/PomodoroTimer';

function App(): JSX.Element {
  const initialNumber = 1500;
  const [time, setTime] = useState(initialNumber);
  return (
    <div className="APP">
      <PomodoroTimer defualtPomodoroTimer={time} />
      <input onChange={({ target }) => setTime(+target.value)} />
      <p>this time!</p>
    </div>
  );
}

export default App;
