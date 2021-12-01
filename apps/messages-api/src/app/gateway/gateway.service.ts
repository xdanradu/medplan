import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { Logger } from '@nestjs/common';

@WebSocketGateway({ cors: true })
export class GatewayService
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;

  private logger: Logger = new Logger('AppGateway');
  private connectedClients = [];

  @SubscribeMessage('msgToServer')
  handleMessage(client: Socket, message: any): void {
    this.logger.log('Received message from client id: ' + client.id);
    this.logger.log(message);
    this.server.emit(
      'msgToClient',
      'broadcast message to all clients <' +
        message.channel +
        '> triggered by client id: ' +
        client.id
    );
    this.server.emit(
      'msgToClient',
      'online clients: ' + this.connectedClients.length
    );
    client.emit('msgToClient', 'only one for ' + client.id);
  }

  afterInit(server: Server) {
    this.logger.log('Initialize the ws server');
  }

  handleDisconnect(client: Socket) {
    this.removeFromConnectedClients(client.id);
    this.logger.log(`Client id <${client.id}> disconnected`);
    this.logger.log('Online users count: ' + this.connectedClients.length);
  }

  removeFromConnectedClients(id: string) {
    let index = null;
    for (let i = 0; i < this.connectedClients.length; i++) {
      if (this.connectedClients[i].id === id) {
        index = i;
      }
    }
    if (index !== null) {
      this.connectedClients.splice(index, 1);
      this.logger.log(
        `Index ${index} removed from the connected client's list`
      );
    }
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.connectedClients.push(client);
    this.logger.log(`Client id <${client.id}> connected`);
    this.server.emit(`msgToClient`, `Connected on id: ${client.id}`);
  }
}
