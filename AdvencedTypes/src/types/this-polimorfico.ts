import numberMagic from '../numberMagic/numberMagic';

export class Calc {
  constructor(public number: number) {}
  add(n: number): this {
    this.number += n;
    return this;
  }

  sub(n: number): this {
    this.number -= n;
    return this;
  }

  div(n: number): this {
    this.number /= n;
    return this;
  }

  mul(n: number): this {
    this.number *= n;
    return this;
  }
}

const calc = new Calc(numberMagic.ten);

calc.add(numberMagic.five);
