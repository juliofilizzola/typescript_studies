interface PersonaProtocol<T, U> {
  name: T,
  LastName: T,
  Age: U,
}

const studient: PersonaProtocol<string, number> = {
  name: 'Julio',
  LastName: 'Filizzola',
  Age: 26
};
