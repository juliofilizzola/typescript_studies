import { IMessaging } from '../../dto/messaging';

export class Messaging implements IMessaging {
  sendMessage(msg: string) {
    console.log('Mensagem enviada: %s', msg);
  }
}
