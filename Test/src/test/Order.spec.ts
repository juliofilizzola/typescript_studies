import { CartItem } from '../interfaces/CartItem';
import { CustomerOrder } from '../interfaces/Customer';
import { IMessaging } from '../interfaces/Messaging';
import { IPersistency } from '../interfaces/Persistency';
import { IShoppingCart } from '../interfaces/ShoppingCart';
import { Order } from '../class/Order';

class ShoppingCartMock implements IShoppingCart {
  get items(): readonly CartItem[] {
    return [];
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  addItem(item: CartItem): void {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  removeItem(index: number): void {}

  total(): number {
    return 1;
  }

  totalWithDiscount(): number {
    return 1;
  }

  isEmpty(): boolean {
    return true;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  clear(): void {}
}

class MessingMock implements IMessaging {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  sendMessage(msg: string): void {}
}

class PersistencyMock implements IPersistency {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  saveOrder(): void {}
}

class CustomerMock implements CustomerOrder {
  getName(): string {
    return '';
  }
  getIDN(): string {
    return '';
  }
}

const makeSut = () => {
  const shoppingCartMock = new ShoppingCartMock();
  const messagingMock = new MessingMock();
  const persistencyMock = new PersistencyMock();
  const customerMock = new CustomerMock();
  const sut = new Order(
    shoppingCartMock,
    messagingMock,
    persistencyMock,
    customerMock,
  );

  return {
    shoppingCartMock,
    messagingMock,
    persistencyMock,
    customerMock,
    sut,
  };
};

describe('Order', () => {
  afterAll(() => jest.clearAllMocks());

  it('should not checkout if cart is empty', () => {
    const { sut, shoppingCartMock } = makeSut();
    const shoppingCartSpy = jest
      .spyOn(shoppingCartMock, 'isEmpty')
      .mockReturnValueOnce(true);
    sut.checkout();
    expect(shoppingCartSpy).toHaveBeenCalledTimes(1);
    expect(sut.orderStatus).toBe('open');
  });

  it('should checkout if cart is not empty', () => {
    const { sut, shoppingCartMock } = makeSut();
    const shoppingCartSpy = jest
      .spyOn(shoppingCartMock, 'isEmpty')
      .mockReturnValueOnce(false);
    sut.checkout();
    expect(shoppingCartSpy).toHaveBeenCalledTimes(1);
    expect(sut.orderStatus).toBe('closed');
  });

  it('should send an email to customer', () => {
    const { sut, messagingMock } = makeSut();
    const messagingMockSpy = jest.spyOn(messagingMock, 'sendMessage');
    sut.checkout();
    expect(messagingMockSpy).toHaveBeenCalledTimes(1);
  });

  it('should save order', () => {
    const { sut, persistencyMock } = makeSut();
    const persistencyMockSpy = jest.spyOn(persistencyMock, 'saveOrder');
    sut.checkout();
    expect(persistencyMockSpy).toHaveBeenCalledTimes(1);
  });

  it('should clear cart', () => {
    const { sut, shoppingCartMock } = makeSut();
    const shoppingCartMockSpy = jest.spyOn(shoppingCartMock, 'clear');
    sut.checkout();
    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
  });
});
