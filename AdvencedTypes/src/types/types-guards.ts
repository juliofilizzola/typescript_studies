function add(a: unknown, b: unknown) {
  return typeof a && b === 'number'? a + b: `${a} e ${b}`;
}

console.log(add(1, 2));
console.log(add(1, '2'));

type personXablau = { name: string, lastName: string };
type personSupimpa = { fullName: string };
type person = personXablau | personSupimpa;

export class studies implements personXablau {
  constructor(public name: string, public lastName: string) {}
}

function showName(obj: person): void {
  // if ('name' in obj) console.log(obj.name);
  if (obj instanceof studies) console.log(obj.name);
}

showName(new studies('julio', 'fili'));
