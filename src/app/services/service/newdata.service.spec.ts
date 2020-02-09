import { TestBed } from '@angular/core/testing';

import { NewdataService } from './newdata.service';

describe('NewdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewdataService = TestBed.get(NewdataService);
    expect(service).toBeTruthy();
  });
});
