import { IPersistency } from '../interfaces/Persistency';

export class Persistency implements IPersistency {
  saveOrder(): void {
    console.log('Pedido salvo com sucesso!');
  }
}
