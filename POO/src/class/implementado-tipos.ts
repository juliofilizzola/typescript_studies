// export abstract class TypePerson {
//   protected abstract name: string;
//   protected abstract lastName: string;
//   protected abstract fullName(): string;
// }

type TypePerson = {
  name: string;
  lastName: string;
  fullName(): string;
};

export class Person implements TypePerson {
  constructor(public name: string, public lastName: string) {}

  fullName(): string {
    return `${this.name} ${this.lastName}`;
  }
}

const person = new Person('Julio', 'Filizzola');
console.log(person.fullName());
