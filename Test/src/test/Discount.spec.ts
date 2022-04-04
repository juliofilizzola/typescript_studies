import {
  Discount,
  FiftyPercentDiscount,
  NoDiscount,
  TenPercentDiscount,
} from '../class/Discount';

const createSUT = (className: new () => Discount): Discount => {
  return new className();
};

const numberTest1 = 10.99;
const numberTest2 = 10;
const numberTest3 = 5;
const numberTest4 = 9;

describe('Discount test', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have no discount', () => {
    const sut = createSUT(NoDiscount);
    expect(sut.calculate(numberTest1)).toBeCloseTo(numberTest1);
  });

  it('should have fifty perrcent discount', () => {
    const sut = createSUT(FiftyPercentDiscount);
    expect(sut.calculate(numberTest2)).toBeCloseTo(numberTest3);
  });

  it('should have ten perrcent discount', () => {
    const sut = createSUT(TenPercentDiscount);
    expect(sut.calculate(numberTest2)).toBeCloseTo(numberTest4);
  });
});
