export class Person {
  static agePattern = 0;
  static cpfPattern = '123.456.789-12';
  constructor(
    public name: string,
    public lastName: string,
    public age: number,
    public cpf: string,
  ) {}

  static createPerson(name: string, lastName: string): Person {
    return new Person(name, lastName, Person.agePattern, Person.cpfPattern);
  }
}

const ageStatic = 34;
const personB = new Person('Julio', 'Fili', ageStatic, '123.456.789.12');
const personC = Person.createPerson('Fili', 'the');
console.log(personB);

console.log(personC);
