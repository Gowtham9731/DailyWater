import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyOrdersComponent } from './daily-orders.component';

describe('DailyOrdersComponent', () => {
  let component: DailyOrdersComponent;
  let fixture: ComponentFixture<DailyOrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailyOrdersComponent]
    });
    fixture = TestBed.createComponent(DailyOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
