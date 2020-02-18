import { TestBed } from '@angular/core/testing';

import { HttpModelService } from './http-model.service';

describe('HttpModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpModelService = TestBed.get(HttpModelService);
    expect(service).toBeTruthy();
  });
});
