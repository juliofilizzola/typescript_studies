const magicNumber1 = 900;
const magicNumber2 = 900;

let valor: unknown;
valor = 100;
valor = 'xablau';
valor = magicNumber1;
valor = magicNumber2;

const valueNumber = 800;

if (typeof valor === 'number') console.log(valor + valueNumber);
