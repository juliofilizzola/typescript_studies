function notReturn(...arg: string[]): void {
  console.log(arg.join(' '));
}

notReturn('top', 'isso aqui é demais');
