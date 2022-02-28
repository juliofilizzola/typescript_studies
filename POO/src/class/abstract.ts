export abstract class Person {
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

  abstract staff(): void;
}

export class Guerreira extends Person {
  staff() {
    console.log('pelos poderes de...');
  }
}

export class Monster extends Person {
  staff() {
    console.log('Morra Seiya!!!!!');
  }
}

const lifePont = 1000;
const powerAttackWirror = 122312;
const powerAttackMonster = 12320;
const monster = new Monster('xablau', powerAttackMonster, lifePont);
const guerreira = new Guerreira('xoxana', powerAttackWirror, lifePont);
guerreira.atack(monster);
