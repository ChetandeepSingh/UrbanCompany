import { Test, TestingModule } from '@nestjs/testing';
import { CarpenterController } from './carpenter.controller';

describe('CarpenterController', () => {
  let controller: CarpenterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarpenterController],
    }).compile();

    controller = module.get<CarpenterController>(CarpenterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
