export abstract class Discount {
  protected discount = 0;

  calculate(price: number): number {
    return price - price * this.discount;
  }
}
const numberTenPercentDiscount = 0.1;
const numberFiftyDiscount = 0.5;

export class FiftyPercentDiscount extends Discount {
  protected readonly discount = numberFiftyDiscount;
}

export class TenPercentDiscount extends Discount {
  protected readonly discount = numberTenPercentDiscount;
}

export class NoDiscount extends Discount {}
