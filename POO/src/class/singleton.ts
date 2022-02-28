export class Database {
  constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Conectando: ${this.host}, ${this.user}, ${this.password}`);
  }
}

const db1 = new Database('localhost', 'root', '12341');
db1.connect(); // primeira instancia do banco de dados.

const db2 = new Database('localhost', 'root', '12341');
db2.connect(); // mais uma instancia do banco de dados.

console.log(db1 === db2); // verificando se os dois são iguais.
