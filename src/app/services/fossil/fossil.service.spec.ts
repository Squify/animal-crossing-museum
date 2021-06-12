import { TestBed } from '@angular/core/testing';

import { FossilService } from './fossil.service';

describe('FossilService', () => {
  let service: FossilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FossilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
