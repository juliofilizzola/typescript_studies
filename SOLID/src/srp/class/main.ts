import { Product } from './entities/products';
import { Order } from './entities/order';

import { ShoppingCart } from './entities/shoppingCart';
import { Messaging } from '../services/messaging';
import { Persistency } from '../services/persistency';

const shoppingCart = new ShoppingCart();
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
console.log(shoppingCart.total());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
