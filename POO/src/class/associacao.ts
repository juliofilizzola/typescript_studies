export class Writer {
  private _tool: Tool | null = null;
  constructor(private _name: string) {}

  set tool(tool: Tool | null) {
    this._tool = tool;
  }

  get tool(): Tool | null {
    return this._tool;
  }

  write(): void {
    if (!this.tool) {
      console.log('Não posso escrever sem ferramenta');
      return;
    }
    this.tool.write();
  }

  get name(): string {
    return this._name;
  }
}

export abstract class Tool {
  constructor(private _name: string) {}
  abstract write(): void;
  get name(): string {
    return this._name;
  }
}

export class Pen extends Tool {
  write(): void {
    console.log(`${this.name} está sendo utilizada`);
  }
}

export class Typewriter extends Tool {
  write(): void {
    console.log(`${this.name} está sendo utilizada`);
  }
}

const escritor = new Writer('Filizzola');
console.log(escritor);

const pen = new Pen('Bic');
console.log(pen);

const typewriter = new Typewriter('mela');
console.log(typewriter);

// as class's funcionam independente.
