export class Animal {
  constructor(public cor: string) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T) {
  return class extends target {
    cor: string;
    constructor(...args: any[]) {
      super(...args);
      this.cor = 'qualquer coisa';
    }
  };
}

const AnimalDecorated = decorator(Animal);

const animal = new AnimalDecorated('red');
const animal2 = new AnimalDecorated('rexab');
const animal3 = new AnimalDecorated('casa');
console.log(animal);
console.log(animal2);
console.log(animal3);
