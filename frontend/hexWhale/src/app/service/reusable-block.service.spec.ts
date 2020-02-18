import { TestBed } from '@angular/core/testing';

import { ReusableBlockService } from './reusable-block.service';

describe('ReusableBlockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReusableBlockService = TestBed.get(ReusableBlockService);
    expect(service).toBeTruthy();
  });
});
