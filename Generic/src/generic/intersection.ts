export function unionObj<O1, O2>(obj1: O1, obj2: O2): O1 & O2 {
  return { ...obj1, ...obj2 };
}

const ob1 = { chave1: 'value1' };
const ob2 = { chave2: 'value2' };
const union = unionObj(ob1, ob2);
console.log(union);
