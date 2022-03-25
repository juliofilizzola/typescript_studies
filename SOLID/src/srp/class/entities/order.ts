import { OrderStatus } from '../../../dto/ordem-status';
import { Messaging } from '../../services/messaging';
import { Persistency } from '../../services/persistency';
import { ShoppingCart } from './shoppingCart';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly msg: Messaging,
    private readonly saveOrder: Persistency,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Carrinho vazio...');
      return;
    }
    this._orderStatus = 'closed';
    this.msg.sendMessage(
      `seu pedido com total de ${this.cart.total()} foi recebido`,
    );

    this.saveOrder.saveOrder();
    this.cart.clear();
  }
}
