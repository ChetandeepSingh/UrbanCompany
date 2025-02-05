import { Test, TestingModule } from '@nestjs/testing';
import { CarpenterService } from './carpenter.service';

describe('CarpenterService', () => {
  let service: CarpenterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarpenterService],
    }).compile();

    service = module.get<CarpenterService>(CarpenterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
