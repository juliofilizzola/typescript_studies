@decorator
export class SelectColor {
  constructor(public cor: string) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T) {
  return class extends target {
    cor: string;
    constructor(...args: any[]) {
      super(...args);
      this.cor = args[0];
    }
  };
}

const selectColor = new SelectColor('red');
const SelectColor2 = new SelectColor('green');
const SelectColor3 = new SelectColor('blue');
console.log(selectColor);
console.log(SelectColor2);
console.log(SelectColor3);
