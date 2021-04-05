import { TestBed } from '@angular/core/testing';

import { DonwnloadPDFService } from './donwnload-pdf.service';

describe('DonwnloadPDFService', () => {
  let service: DonwnloadPDFService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonwnloadPDFService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
