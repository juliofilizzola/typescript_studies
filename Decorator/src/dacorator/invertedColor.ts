import { Constructor } from '../dto/class';

function invertedColor<T extends Constructor>(target: T) {
  return class extends target {
    cor: string;
    constructor(...args: any[]) {
      super(...args);
      this.cor = args[0].split('').reverse().join('');
    }
  };
}

export default invertedColor;
