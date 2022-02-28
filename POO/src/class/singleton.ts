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
console.log(db1);
