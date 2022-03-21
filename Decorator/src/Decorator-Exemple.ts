export class Animal {
  constructor(public cor: string) {}
}

function decorator(target: any): any {
  return target;
}

const AnimalDecorated = decorator(Animal);

const animal = new AnimalDecorated('red');
console.log(animal);
