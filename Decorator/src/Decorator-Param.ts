import decoratorParameter from './dacorator/paramenter';

// exemplo de Decorator recebendo paramentro
@decoratorParameter('essa é minha cor', 'e esse é o tipo dela')
export class Color {
  constructor(public color: string, public colorType: string) {}
}

const cor = new Color('red', 'blood');
console.log(cor);
