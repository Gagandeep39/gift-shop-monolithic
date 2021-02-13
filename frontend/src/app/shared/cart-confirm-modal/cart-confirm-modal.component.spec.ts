import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartConfirmModalComponent } from './cart-confirm-modal.component';

describe('CartConfirmModalComponent', () => {
  let component: CartConfirmModalComponent;
  let fixture: ComponentFixture<CartConfirmModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartConfirmModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartConfirmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
