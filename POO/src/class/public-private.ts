export class Empressa {
  public readonly name: string;
  // o metodo public pode ser utilizado (visto) pela propia class, e suas subclass.
  // caso nada seja declarodo o metodo public é implicito
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  adicionarColaboradores(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(
    public readonly name: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empressa('Filizzola.end', '1234545/32321');

console.log(empresa1);

console.log(empresa1.name);
