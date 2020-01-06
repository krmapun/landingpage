import { TestBed } from '@angular/core/testing';

import { DataSwapiService } from './data-swapi.service';

describe('DataSwapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataSwapiService = TestBed.get(DataSwapiService);
    expect(service).toBeTruthy();
  });
});
