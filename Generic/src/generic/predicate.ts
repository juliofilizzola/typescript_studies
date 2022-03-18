export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
} //essa verificação não foge o escopo;

export function soma<T>(...args: T[]): number {
  const result = args.reduce((sum, value) => {
    if (isNumber(sum) && isNumber(value)) {
      return sum + value;
    }
    return sum;
  }, 0);
  return result;
}
