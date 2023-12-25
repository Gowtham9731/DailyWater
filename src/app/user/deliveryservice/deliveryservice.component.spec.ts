import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryserviceComponent } from './deliveryservice.component';

describe('DeliveryserviceComponent', () => {
  let component: DeliveryserviceComponent;
  let fixture: ComponentFixture<DeliveryserviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveryserviceComponent]
    });
    fixture = TestBed.createComponent(DeliveryserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
