function addOrConcat(a: string | number, b: string | number) {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

const magicNumber = 5;

console.log(addOrConcat('a', 'b'));
console.log(addOrConcat(magicNumber, 1));
