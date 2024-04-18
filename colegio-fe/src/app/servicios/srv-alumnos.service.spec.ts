import { TestBed } from '@angular/core/testing';

import { SrvAlumnosService } from './srv-alumnos.service';

describe('SrvAlumnosService', () => {
  let service: SrvAlumnosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrvAlumnosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
