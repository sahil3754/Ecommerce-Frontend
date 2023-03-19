import { TestBed } from '@angular/core/testing';

import { LinkcheckGuard } from './linkcheck.guard';

describe('LinkcheckGuard', () => {
  let guard: LinkcheckGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LinkcheckGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
