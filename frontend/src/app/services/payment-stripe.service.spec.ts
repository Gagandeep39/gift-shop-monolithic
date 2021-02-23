import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';

import { PaymentStripeService } from './payment-stripe.service';

describe('PaymentStripeService', () => {
  let service: PaymentStripeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
        JwtModule.forRoot({}),
      ],
      providers: [JwtHelperService],
    });
    service = TestBed.inject(PaymentStripeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
