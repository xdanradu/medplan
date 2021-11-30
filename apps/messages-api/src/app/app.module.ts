import { Module } from '@nestjs/common';

import { AppGateway } from './services/app-gateway.service';

@Module({
  imports: [],
  controllers: [],
  providers: [AppGateway],
})
export class AppModule {}
