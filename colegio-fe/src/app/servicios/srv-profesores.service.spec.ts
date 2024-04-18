import { TestBed } from '@angular/core/testing';

import { SrvProfesoresService } from './srv-profesores.service';

describe('SrvProfesoresService', () => {
  let service: SrvProfesoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrvProfesoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
