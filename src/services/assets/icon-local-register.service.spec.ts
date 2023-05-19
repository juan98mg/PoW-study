import { TestBed } from '@angular/core/testing';

import { IconLocalRegisterService } from './icon-local-register.service';

describe('IconLocalRegisterService', () => {
  let service: IconLocalRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IconLocalRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
