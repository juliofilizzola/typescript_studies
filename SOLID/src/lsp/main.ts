import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';
import { NoDiscount } from './class/Discount';
import { Order } from './class/Order';
import { Product } from './class/Products';
import { ShoppingCart } from './class/ShoppingCart';
import {
  EnterpriseCustomer,
  IndividualCustomer,
} from '../srp/class/entities/custormer';

const noDiscount = new NoDiscount();

const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const individualCustomer = new IndividualCustomer(
  'Luiz',
  'Antonio',
  '111.111.111-11',
);
const enterpriseCustomer = new EnterpriseCustomer(
  'xablau.lsa',
  '1255787248744-54',
);

const order = new Order(
  shoppingCart,
  messaging,
  persistency,
  enterpriseCustomer,
);

const camisetaOrder = 49.91;
const cadernoOrder = 9.9123;
const lapisOrder = 1.59;

shoppingCart.addItem(new Product('Camiseta', camisetaOrder));
shoppingCart.addItem(new Product('Caderno', cadernoOrder));
shoppingCart.addItem(new Product('Lápis', lapisOrder));

console.log(shoppingCart.items);
console.log(shoppingCart.totalWithDiscount());
console.log(shoppingCart.total());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
