export class person {
  constructor(
    public name: string,
    public lastName: string,
    private age: number,
    protected cpf: string,
  ) {}

  getAge(): number {
    return this.age;
  }

  getCPF(): string {
    return this.cpf;
  }

  getFullName(): string {
    return `${this.name} ${this.lastName}`;
  }
}

export class Studient extends person {
  getFullName(): string {
    return `${this.name} Ronaldo ${this.lastName}`;
  }
}
export class Client extends person {}
const age = 25;
const studient = new Studient('Julio', 'Filizzola', age, '01798258523');
const client = new Client('Elias', 'Stanik', age, '01798258523');

// console.log(studient);
console.log(studient.getFullName());
console.log(client.getFullName());
