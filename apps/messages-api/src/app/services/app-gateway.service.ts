import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage, MessageBody, WsResponse
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { Logger } from '@nestjs/common';

@WebSocketGateway({ cors: true })
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer() server: Server;

  private logger: Logger = new Logger('AppGateway');
  private users = 0;

  @SubscribeMessage('msgToServer')
  handleMessage(client: Socket, message: string): void {
    //console.log('chat');
    console.log(message);
    this.server.emit('msgToClient', 'received'+message.channel);
    // return { event: 'msgToClient', data: message };
  }

  afterInit(server: Server) {
    this.logger.log('Init');
  }

  handleDisconnect(client: Socket) {
    this.users--;
    this.server.emit('users', this.users);
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.users++;
    this.logger.log(`Client connected ${client.id}`);
    this.server.emit(`msgToClient`, `received client_id: ${client.id}`);
  }
}
