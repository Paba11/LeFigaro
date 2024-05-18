import { TestBed } from '@angular/core/testing';

import { OtherContentsService } from './other-contents.service';

describe('OtherContentsService', () => {
  let service: OtherContentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtherContentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
