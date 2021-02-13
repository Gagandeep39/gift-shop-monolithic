import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryHistoryComponent } from './delivery-history.component';

describe('DeliveryHistoryComponent', () => {
  let component: DeliveryHistoryComponent;
  let fixture: ComponentFixture<DeliveryHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
