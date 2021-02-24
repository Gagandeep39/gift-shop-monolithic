import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';

import { RequestQuestionComponent } from './request-question.component';

describe('RequestQuestionComponent', () => {
  let component: RequestQuestionComponent;
  let fixture: ComponentFixture<RequestQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        HttpClientTestingModule, 
        FormsModule, 
        RouterTestingModule.withRoutes([]),
        ReactiveFormsModule,
        JwtModule.forRoot({
          config: {
            tokenGetter: function  tokenGetter() { 
            return localStorage.getItem('token');
          } 
       }})],
      declarations: [ RequestQuestionComponent ],
      providers: [ JwtHelperService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
