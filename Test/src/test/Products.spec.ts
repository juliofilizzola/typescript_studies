import { Product } from '../class/Products';

const createSUT = (name: string, price: number): Product => {
  return new Product(name, price);
};

const numberTest = 40;

describe('Products test', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have properties', () => {
    const sut = createSUT('camisa', numberTest);
    expect(sut).toHaveProperty('name', 'camisa');
    expect(sut).toHaveProperty('price', numberTest);
    expect(sut).not.toHaveProperty('name', numberTest);
  });
});
