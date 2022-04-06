import React, { useState } from 'react';
import { useInterval } from '../hooks/useInterval';
import { IPomodoroProps } from './dto/PomodoroTimer';

export function PomodoroTimer(props: IPomodoroProps): JSX.Element {
  const [mainTime, setMainTime] = useState(props.defualtPomodoroTimer);
  const numberInterval = 1000;

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, numberInterval);

  return <div>Olá, Mundo! {mainTime}</div>;
}
