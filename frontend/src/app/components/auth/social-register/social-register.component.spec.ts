import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialRegisterComponent } from './social-register.component';

describe('SocialRegisterComponent', () => {
  let component: SocialRegisterComponent;
  let fixture: ComponentFixture<SocialRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
