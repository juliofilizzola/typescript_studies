import { IMessaging } from '../interfaces/Messaging';

export class Messaging implements IMessaging {
  sendMessage(msg: string) {
    console.log(`Mensagem enviada: ${msg}`);
  }
}
