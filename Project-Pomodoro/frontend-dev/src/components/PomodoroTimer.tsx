import React, { useEffect, useState } from 'react';
import { useInterval } from '../hooks/useInterval';
import { secondsTotime } from '../utils/secondsToTime';
import { Button } from './Botton';
import { IPomodoroProps } from './dto/PomodoroTimer';

export function PomodoroTimer(props: IPomodoroProps): JSX.Element {
  const [mainTime, setMainTime] = useState(props.defualtPomodoroTimer);
  const [timeCount, setTimeCout] = useState(false);
  const [work, setWork] = useState(false);
  const [resting, setResting] = useState(false);

  const numberInterval = 1000;
  const interval = timeCount ? numberInterval : null;

  useEffect(() => {
    if (work) document.body.classList.add('work');
    if (resting) document.body.classList.remove('work');
  }, [work, resting]);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, interval);

  const configureWork = () => {
    setTimeCout(!timeCount);
    setWork(!work);
  };

  return (
    <>
      <Button text={'Parar Contador'} onClick={() => configureWork()} />
      <div>Olá, Mundo! {secondsTotime(mainTime)}</div>
    </>
  );
}
