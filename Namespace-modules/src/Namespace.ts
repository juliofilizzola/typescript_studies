namespace MyNamespace {
  export const name = 'Julio';
  export class PersonNamespace{
    constructor(public name: string) {}
  }
  const personNamespace = new PersonNamespace(name);
  console.log(personNamespace);
  export namespace OutroNamespace {
    export const nameDoNamespace = 'outro nameespace';
  }
}

const namespace = new MyNamespace.PersonNamespace('xalau');
console.log(MyNamespace.name);
console.log(MyNamespace.OutroNamespace.nameDoNamespace);

console.log(namespace);

export default 1;
