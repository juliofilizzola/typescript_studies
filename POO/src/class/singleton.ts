// export class Database {
//   constructor(
//     private host: string,
//     private user: string,
//     private password: string,
//   ) {}

//   connect(): void {
//     console.log(`Conectando: ${this.host}, ${this.user}, ${this.password}`);
//   }
// }

// const db1 = new Database('localhost', 'root', '12341');
// db1.connect(); // primeira instancia do banco de dados.

// const db2 = new Database('localhost', 'root', '12341');
// db2.connect(); // mais uma instancia do banco de dados.

// console.log(db1 === db2); // verificando se os dois são iguais.

// metodo singleton - GOF

export class Database {
  private static database: Database;
  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Conectando: ${this.host}, ${this.user}, ${this.password}`);
  }

  // Factorty Method - GoF
  static getDatabase(host: string, user: string, password: string) {
    if (Database.database) {
      return Database.database;
    }
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}
