let x;

const numberRequest = 20;

if (typeof x === 'undefined') x = numberRequest;

console.log(x);

export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string; // interrogação diz que o objeto pode ser null;
} {
  return {
    firstName,
    lastName,
  };
}
