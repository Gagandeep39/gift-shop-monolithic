import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';

import { DeliveryHistoryService } from './delivery-history.service';

describe('DeliveryHistoryService', () => {
  let service: DeliveryHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
        JwtModule.forRoot({}),
      ],
      providers: [JwtHelperService],
    });
    service = TestBed.inject(DeliveryHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
