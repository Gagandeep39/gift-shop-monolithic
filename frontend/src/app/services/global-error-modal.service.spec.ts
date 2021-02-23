import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';

import { GlobalErrorModalService } from './global-error-modal.service';

describe('GlobalErrorModalService', () => {
  let service: GlobalErrorModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
        JwtModule.forRoot({}),
      ],
      providers: [JwtHelperService],
    });
    service = TestBed.inject(GlobalErrorModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
