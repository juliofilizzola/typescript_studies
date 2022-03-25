import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';
import { NoDiscount } from './class/discount';
import { Order } from './class/order';
import { Product } from './class/products';
import { ShoppingCart } from './class/ShoppingCart';

const noDiscount = new NoDiscount();

const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();

const order = new Order(shoppingCart, messaging, persistency);

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
