import { IPersistency } from '../../dto/persistency';

export class Persistency implements IPersistency {
  saveOrder(): void {
    console.log('Pedido salvo com sucesso!');
  }
}
