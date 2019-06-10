import { TestBed, async, inject } from '@angular/core/testing';

import { PermitGuard } from './permit.guard';

describe('PermitGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PermitGuard]
    });
  });

  it('should ...', inject([PermitGuard], (guard: PermitGuard) => {
    expect(guard).toBeTruthy();
  }));
});
