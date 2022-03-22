import decorator from './dacorator/method';

export class Person {
  private name: string;
  private lastName: string;
  private age: number;

  constructor(name: string, lastName: string, age: number) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  @decorator
  method(msg: string): string {
    return `${this.FullName}: ${msg}`;
  }

  get FullName(): string {
    return `${this.name} ${this.lastName}`;
  }

  set fullName(value: string) {
    const work = value.split(/\s+/g);
    const firstName = work.shift();
    if (!firstName) {
      return;
    }
    this.name = firstName;
    this.lastName = work.join(' ');
  }
}

const age = 26;

const person = new Person('Julio', 'Filizzola', age);
person.method = () => 'XABLAYU';
const method = person.method('Hello Word!!');
console.log(method);
