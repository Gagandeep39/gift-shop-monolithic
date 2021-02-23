import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';

import { CartConfirmModalService } from './cart-confirm-modal.service';

describe('CartConfirmModalService', () => {
  let service: CartConfirmModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
        JwtModule.forRoot({}),
      ],
      providers: [JwtHelperService],
    });
    service = TestBed.inject(CartConfirmModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
