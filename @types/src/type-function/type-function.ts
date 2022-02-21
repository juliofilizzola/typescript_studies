export function functionArrow(this: Date): void {
  console.log(this);
}

functionArrow.call(new Date());
