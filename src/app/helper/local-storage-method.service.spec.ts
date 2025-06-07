import { TestBed } from '@angular/core/testing';

import { LocalStorageMethodService } from './local-storage-method.service';

describe('LocalStorageMethodService', () => {
  let service: LocalStorageMethodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageMethodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
