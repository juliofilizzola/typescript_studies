const objectA = {
  KeyA: 'Value a',
  KeyB: 'Value b',
};
// Aqui o objeto já foi inferido, e o TypeScript já identificou o tipo dele, e as propriedadtes que ele possui

console.log(objectA.KeyA);
objectA.KeyA = 'Novo Valo para a chave a';
console.log(objectA.KeyA);

// objectA.KeyC = 'new key';

// outro jeito

const objectB: {
  KeyA: string;
  KeyB: string;
  KeyC?: string;
  [Key: string]: unknown;
} = {
  KeyA: 'valor 1',
  KeyB: 'Valor 2',
};
console.log(objectB);

objectB.KeyA = 'simple Value';
objectB.KeyC = 'simple ';
objectB.KeyD = 'Nova Chave';

console.log(objectB);

// exemplo com readonly

const objectC: {
  readonly KeyA: string;
  KeyB: string;
  KeyC?: string;
  [Key: string]: unknown;
} = {
  KeyA: 'valor 1',
  KeyB: 'Valor 2',
};
console.log(objectC);

// objectC.KeyA = 'simple Value'; com o readonly, esse objeto não pode ser modificado.
objectC.KeyC = 'simple ';
objectC.KeyD = 'Nova Chave';

console.log(objectC);
