import { TestBed } from '@angular/core/testing';

import { BalloonService } from './balloon.service';

describe('BalloonService', () => {
  let service: BalloonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BalloonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
