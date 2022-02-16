const magicNumber1 = 900;
const magicNumber2 = 900;

let x: unknown;
x = 100;
x = 'xablau';
x = magicNumber1;
x = magicNumber2;

const y = 800;

if (typeof x === 'number') console.log(x + y);
