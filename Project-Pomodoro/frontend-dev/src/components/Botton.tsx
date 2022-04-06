import React from 'react';
import { IPropsButton } from './dto/button';

export function Button(props: IPropsButton): JSX.Element {
  return (
    <button type="submit" onClick={props.onClick}>
      {props.text}
    </button>
  );
}
