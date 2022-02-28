export class Person {
  constructor(
    protected name: string,
    protected attack: number,
    protected life: number,
  ) {}

  atack(person: Person) {
    person.perderLife(this.attack);
  }

  perderLife(powerAttack: number) {
    this.life - powerAttack;
  }
}
