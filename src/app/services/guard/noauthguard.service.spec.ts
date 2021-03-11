import { TestBed } from '@angular/core/testing';

import { NoauthguardService } from './noauthguard.service';

describe('NoauthguardService', () => {
  let service: NoauthguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoauthguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
