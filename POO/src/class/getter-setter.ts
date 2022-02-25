export class Person {
  constructor(
    public name: string,
    public lastName: string,
    private age: number,
    protected _cpf: string,
  ) {}

  set cpf(cpf: string) {
    this._cpf = cpf;
  }

  get cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }
}
const ageA = 34;
const personA = new Person('Julio', 'Fili', ageA, '123.456.789.12');

console.log(personA);

console.log((personA.cpf = '789.456.123-78'));

console.log(personA);

console.log(personA.cpf);
