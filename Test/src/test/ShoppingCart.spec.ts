import { Discount } from '../class/Discount';
import { CartItem } from '../interfaces/CartItem';
import { ShoppingCart } from '../class/ShoppingCart';
import {
  CartItemMock,
  productMock1,
  productMock2,
} from './mock/ShoppingCartMock';

const createSUT = () => {
  const discountMock = createDiscountMock();
  const sut = new ShoppingCart(discountMock);
  return { sut, discountMock };
};

const createDiscountMock = () => {
  class DiscountMock extends Discount {}
  return new DiscountMock();
};

const createItem = (name: string, price: number): CartItem => {
  return new CartItemMock(name, price);
};

const createdProductCart = () => {
  const { sut, discountMock } = createSUT();
  const product1 = createItem(productMock1.name, productMock1.price);
  const product2 = createItem(productMock2.name, productMock2.price);
  sut.addItem(product1);
  sut.addItem(product2);
  return { sut, discountMock };
};

describe('shopping cart test', () => {
  afterEach(() => jest.clearAllMocks());

  it('should be an empty cart when no products is added', () => {
    const { sut } = createSUT();
    expect(sut.isEmpty()).toBe(true);
  });

  it('should have 2 cart items', () => {
    const { sut } = createdProductCart();
    expect(sut.items.length).toBe(2);
  });

  it('should test total and totalWithDicount', () => {
    const { sut } = createdProductCart();

    expect(sut.total()).toBe(productMock1.price + productMock2.price);
    expect(sut.totalWithDiscount()).toBe(
      productMock1.price + productMock2.price,
    );
  });

  it('should add prodcuts and clear car', () => {
    const { sut } = createdProductCart();
    expect(sut.items.length).toBe(2);

    sut.clear();

    expect(sut.items.length).toBe(0);
  });

  it('should remove products', () => {
    const { sut } = createdProductCart();
    expect(sut.items.length).toBe(2);

    sut.removeItem(1);

    expect(sut.items.length).toBe(1);
  });

  it('should call discount.calculet(price) whe totalWhitDiscount is called', () => {
    const { sut, discountMock } = createdProductCart();
    const DiscountMockSpy = jest.spyOn(discountMock, 'calculate');
    sut.totalWithDiscount();
    expect(DiscountMockSpy).toHaveBeenCalledTimes(1);
  });

  it('should call discount.calculate with total price when totalWithDiscount is called', () => {
    const { sut, discountMock } = createdProductCart();
    const discountMockSpy = jest.spyOn(discountMock, 'calculate');
    sut.totalWithDiscount();
    expect(discountMockSpy).toHaveBeenCalledWith(sut.total());
  });
});
