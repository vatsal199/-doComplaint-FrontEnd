import { TestBed } from '@angular/core/testing';

import { ComplaintDataService } from './complaint-data.service';

describe('ComplaintDataService', () => {
  let service: ComplaintDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComplaintDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
