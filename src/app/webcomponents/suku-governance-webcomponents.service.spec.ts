import { TestBed } from '@angular/core/testing';

import { SukuGovernanceWebcomponentsService } from './suku-governance-webcomponents.service';

describe('SukuGovernanceWebcomponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SukuGovernanceWebcomponentsService = TestBed.get(SukuGovernanceWebcomponentsService);
    expect(service).toBeTruthy();
  });
});
