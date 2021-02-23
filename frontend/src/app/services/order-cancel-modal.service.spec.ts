import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';

import { OrderCancelModalService } from './order-cancel-modal.service';

describe('OrderCancelModalService', () => {
  let service: OrderCancelModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
        JwtModule.forRoot({}),
      ],
      providers: [JwtHelperService],
    });
    service = TestBed.inject(OrderCancelModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
