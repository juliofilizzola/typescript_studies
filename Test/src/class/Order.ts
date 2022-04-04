import { OrderStatus } from '../interfaces/OrderStatus';
import { CustomerOrder } from '../interfaces/Customer';
import { IShoppingCart } from '../interfaces/ShoppingCart';
import { IMessaging } from '../interfaces/Messaging';
import { IPersistency } from '../interfaces/Persistency';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: IShoppingCart,
    private readonly msg: IMessaging,
    private readonly saveOrder: IPersistency,
    private readonly customer: CustomerOrder
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
    this.msg.sendMessage(`seu pedido com total de ${this.cart.totalWithDiscount()} foi recebido`);

    this.saveOrder.saveOrder();
    this.cart.clear();
    console.log(
      `O nome do cliente é ${this.customer.getName()} ${this.customer.getIDN()}`
    );
  }

}
