import { Test } from '@nestjs/testing';

import { AppGatewayService } from './app-gateway.service';

describe('AppGatewayService', () => {
  let service: AppGatewayService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
    }).compile();

  });

  describe('getData', () => {
    it('should return "Welcome to messages-api!"', () => {
      expect(service.getData()).toEqual({
        message: 'Welcome to messages-api!',
      });
    });
  });
});
