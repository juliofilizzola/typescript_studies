import invertedColor from './dacorator/invertedColor';

@invertedColor
export class SelectColor {
  constructor(public cor: string) {}
}

const selectColor = new SelectColor('red');
const SelectColor2 = new SelectColor('green');
const SelectColor3 = new SelectColor('blue');
console.log(selectColor);
console.log(SelectColor2);
console.log(SelectColor3);
