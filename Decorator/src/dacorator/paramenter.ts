import { Constructor } from '../dto/class';

function decoratorParameter(param1: string, param2: string) {
  return function (target: Constructor) {
    return class extends target {
      color: string;
      colorType: string;
      constructor(...args: any[]) {
        super(...args);
        this.color = args[0].split('').reverse().join('') + ' ' + param1;
        this.colorType = args[1] + ' ' + param2;
      }
    };
  };
}

export default decoratorParameter;
