export class ShoppingCart {
  private readonly products: Products[] = [];

  insertProduct(...products: Products[]): void {
    for (const product of products) {
      this.products.push(product);
    }
  }
}

export class Products {
  constructor(public name: string, public price: number) {}
}
