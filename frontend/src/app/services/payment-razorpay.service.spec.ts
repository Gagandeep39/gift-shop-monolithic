import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';

import { PaymentRazorpayService } from './payment-razorpay.service';

describe('PaymentRazorpayService', () => {
  let service: PaymentRazorpayService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
        JwtModule.forRoot({}),
      ],
      providers: [JwtHelperService],
    });
    service = TestBed.inject(PaymentRazorpayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
