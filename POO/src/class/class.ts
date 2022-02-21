export class Empressa {
  public readonly name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const empresa1 = new Empressa('Filizzola.end');

console.log(empresa1);
