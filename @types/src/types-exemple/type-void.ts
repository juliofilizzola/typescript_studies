function notReturn(...arg: string[]): void {
  console.log(arg.join(' '));
}

notReturn('top', 'isso aqui é demais');

const person = {
  name: 'Julio',
  lastName: 'Filizzola',

  concatName(): void {
    console.log(this.name + ' ' + this.lastName);
  },
};

person.concatName();

export { person };
