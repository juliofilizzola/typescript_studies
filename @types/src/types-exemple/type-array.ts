function mult(...args: Array<number>) {
  return args.reduce((acc, value) => acc * value, 1);
}
const five = 5;

console.log(mult(five, 2), 'mult');

function sub(...args: number[]) {
  return args.reduce((acc, value) => acc - value, 1);
}
console.log(sub(1, 2), 'sub');

// dois jeitos para declar um array.
