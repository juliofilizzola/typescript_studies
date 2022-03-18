export class Pilha<T> {
  private contator = 0;
  private elements: { [Key: number]: T } = {};

  push(element: T): void {
    this.elements[this.contator] = element;
    this.contator += 1;
  }

  pop(): T {
    if(this.contator < 0) {
      throw new Error("pilha está vazia")
    }
    this.contator === 1? this.contator : this.contator -= 1;
    const element = this.elements[this.contator];
    delete this.elements[this.contator];
    return element;
  }

  isEmpty(): boolean {
    return this.contator === 0;
  }

  count(): number {
    return this.contator;
  }

  lastItem(): T {
    return this.elements[this.contator - 1];
  }

  getAllItens() {
    return this.elements;
  }

}

const pilha = new Pilha<number>();

pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push(4);
pilha.push(5);

console.log(pilha.lastItem());

console.log(pilha.isEmpty());


