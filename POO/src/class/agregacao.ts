export class ShoppingCart {
  private readonly products: Product[] = [];

  insertProduct(...products: Product[]): void {
    for (const product of products) {
      this.products.push(product);
    }
  }

  quantityProducts(): number {
    return this.products.length;
  }

  totalValue(): number {
    return this.products.reduce((some, product) => some + product.price, 0);
  }
}

export class Product {
  constructor(public name: string, public price: number) {}
}

const price = 199;

const product1 = new Product('Camisa do Galo', price);

const shoppingCart = new ShoppingCart();

shoppingCart.insertProduct(product1);
