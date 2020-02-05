import { TestBed, async, inject } from '@angular/core/testing';

import { UnAuthenticationRequiredGuard } from './un-authentication-required.guard';

describe('UnAuthenticationRequiredGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnAuthenticationRequiredGuard]
    });
  });

  it('should ...', inject([UnAuthenticationRequiredGuard], (guard: UnAuthenticationRequiredGuard) => {
    expect(guard).toBeTruthy();
  }));
});
