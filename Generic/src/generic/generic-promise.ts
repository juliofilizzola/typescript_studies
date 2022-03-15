const arrayNumber: Array<number> = [1, 2, 3, 4, 5, 6, 7];
console.log(arrayNumber);

async function promiseAsync() {
  return arrayNumber;
}

promiseAsync().then((result) => console.log(...result));
