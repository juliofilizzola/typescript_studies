type ObterChaveFn = <O, K extends keyof O>(Objeto: O, Key: K) => O[K];

const OKey: ObterChaveFn = (Object, Key) => Object[Key];

const objectExempl = {
  Color: ['Red', 'green'],
  Vacinas: ['Vacina 1', 'Vacina 2'],
  age: 12
};

const vacina = OKey(objectExempl, 'Vacinas');

console.log(vacina);
