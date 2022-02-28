export class Writer {
  private _tool: Tool | null = null;
  constructor(private _name: string) {}
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
