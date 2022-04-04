export abstract class Discount {
  protected discount = 0;

  calculate(price: number): number {
    return price - price * this.discount;
  }
}

const FiftyPercentDiscountNumber = 0.5;
const TenPercentDiscountNumber = 0.1;

export class FiftyPercentDiscount extends Discount {
  protected readonly discount = FiftyPercentDiscountNumber;
}

export class TenPercentDiscount extends Discount {
  protected readonly discount = TenPercentDiscountNumber;
}

export class NoDiscount extends Discount {}
