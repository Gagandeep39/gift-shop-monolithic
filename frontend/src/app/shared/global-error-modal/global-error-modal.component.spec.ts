import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalErrorModalComponent } from './global-error-modal.component';

describe('GlobalErrorModalComponent', () => {
  let component: GlobalErrorModalComponent;
  let fixture: ComponentFixture<GlobalErrorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalErrorModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalErrorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
