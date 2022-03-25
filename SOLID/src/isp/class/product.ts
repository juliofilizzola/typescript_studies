import { CartItem } from '../../dto/cart-items';

export class Product implements CartItem {
  constructor(public name: string, public price: number) {}
}
