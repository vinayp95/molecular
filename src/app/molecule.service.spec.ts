import { TestBed } from '@angular/core/testing';

import { MoleculeService } from './molecule.service';

describe('MoleculeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoleculeService = TestBed.get(MoleculeService);
    expect(service).toBeTruthy();
  });
});
