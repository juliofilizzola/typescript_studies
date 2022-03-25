/*
Interface segregation principle (Princípio da segregação de Interface) -
os clientes não devem ser forçados a depender de types, interfaces ou membros
abstratos que não utilizam
*/
import { ShoppingCart } from './class/shoppingCart';
import { Order } from './class/Order';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';
import { Product } from './class/product';
import { NoDiscount } from './class/discount';
import { EnterpriseCustomer } from './class/customer';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
// const individualCustomer = new IndividualCustomer(
//   'Luiz',
//   'Miranda',
//   '111.111.111-11',
// );
const enterpriseCustomer = new EnterpriseCustomer(
  'Empresa Gigante',
  '2222222222222222',
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
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDicount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
