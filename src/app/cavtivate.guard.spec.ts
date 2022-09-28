import { TestBed } from '@angular/core/testing';

import { CavtivateGuard } from './cavtivate.guard';

describe('CavtivateGuard', () => {
  let guard: CavtivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CavtivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
