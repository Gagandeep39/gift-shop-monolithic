import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCancelModalComponent } from './order-cancel-modal.component';

describe('OrderCancelModalComponent', () => {
  let component: OrderCancelModalComponent;
  let fixture: ComponentFixture<OrderCancelModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderCancelModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCancelModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
