function mult(...args: Array<number>) {
  return args.reduce((acc, value) => acc * value, 1);
}
console.log(mult(1, 2));
