import { TestBed } from '@angular/core/testing';

import { DinamicServicesService } from './dinamic-services.service';

describe('DinamicServicesService', () => {
  let service: DinamicServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DinamicServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
