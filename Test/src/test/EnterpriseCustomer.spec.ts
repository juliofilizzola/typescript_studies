import { EnterpriseCustomer } from '../class/Customer';
import { Enterprise } from './mock/customerMock';

const createSUT = (name: string, cnpj: string): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

describe('enterprise customer test', () => {
  afterEach(() => jest.clearAllMocks());

  it('verivy enterprise customer', () => {
    const sut = createSUT(Enterprise.name, Enterprise.cnpj);

    expect(sut.name).toBe(Enterprise.name);
    expect(sut.cnpj).toBe(Enterprise.cnpj);
  });

  it('test method enterprise customer getName', () => {
    const sut = createSUT(Enterprise.name, Enterprise.cnpj);

    expect(sut.getName()).toBe(Enterprise.name);
  });

  it('test method enterprise customer getIDN', () => {
    const sut = createSUT(Enterprise.name, Enterprise.cnpj);

    expect(sut.getIDN()).toBe(Enterprise.cnpj);
  });
});
