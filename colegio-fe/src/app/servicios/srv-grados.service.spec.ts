import { TestBed } from '@angular/core/testing';

import { SrvGradosService } from './srv-grados.service';

describe('SrvGradosService', () => {
  let service: SrvGradosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrvGradosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
