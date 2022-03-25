import { CartItem } from './cart-items';

export interface IShoppingCart {
  items: Readonly<CartItem[]>;
  addItem(item: CartItem): void;
  removeItem(index: number): void;
  total(): number;
  totalWithDiscount(): number;
  isEmpty(): boolean;
  clear(): void;
}
