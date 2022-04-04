import { IndividualCustomer } from '../class/Customer';
import { Individual } from './mock/customerMock';

const createSUT = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

describe('IndividualCustomer test', () => {
  afterEach(() => jest.clearAllMocks());

  it('verivy Individual customer test', () => {
    const sut = createSUT(
      Individual.firstName,
      Individual.lastName,
      Individual.cpf,
    );

    expect(sut.cpf).toBe(Individual.cpf);
    expect(sut.firstName).toBe(Individual.firstName);
    expect(sut.lastName).toBe(Individual.lastName);
  });

  it('test method Invidual customer getName', () => {
    const sut = createSUT(
      Individual.firstName,
      Individual.lastName,
      Individual.cpf,
    );
    expect(sut.getName()).toBe(
      `${Individual.firstName} ${Individual.lastName}`,
    );
  });

  it('test method Invidual customer getIDN', () => {
    const sut = createSUT(
      Individual.firstName,
      Individual.lastName,
      Individual.cpf,
    );
    expect(sut.getIDN()).toBe(Individual.cpf);
  });
});
