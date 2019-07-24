import { TestBed } from '@angular/core/testing';

import { WellService } from './well.service';

describe('WellService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WellService = TestBed.get(WellService);
    expect(service).toBeTruthy();
  });
});
