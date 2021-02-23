import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';

import { AccessDeniedModalService } from './access-denied-modal.service';

describe('AccessDeniedModalService', () => {
  let service: AccessDeniedModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
        JwtModule.forRoot({}),
      ],
      providers: [JwtHelperService],
    });
    service = TestBed.inject(AccessDeniedModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
