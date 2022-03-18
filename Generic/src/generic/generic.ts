type FilterCallBack<U> = (value: U, index?: number, array?: U[]) => boolean;

export function myfilter<T>(array: T[], callbakfn: FilterCallBack<T>): T[] {
  const newArray = [];
  for (let index = 0; index < array.length; index += 1) {
    if (callbakfn(array[index])) {
      newArray.push(array[index]);
    }
  }
  return newArray;
}

const array = [1, 2, 3, 4];

const filterArry = myfilter(array, (value) => value < 5);

console.log(filterArry);


