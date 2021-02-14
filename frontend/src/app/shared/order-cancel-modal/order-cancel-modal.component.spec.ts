import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCancelModalComponent } from './order-cancel-modal.component';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('OrderCancelModalComponent', () => {
  let component: OrderCancelModalComponent;
  let fixture: ComponentFixture<OrderCancelModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule.withRoutes([]) ],
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
