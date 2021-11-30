import { Module } from '@nestjs/common';
import { GatewayService } from './gateway/gateway.service';

@Module({
  imports: [],
  controllers: [],
  providers: [GatewayService],
})
export class AppModule {}
