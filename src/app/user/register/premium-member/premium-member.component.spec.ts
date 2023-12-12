import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumMemberComponent } from './premium-member.component';

describe('PremiumMemberComponent', () => {
  let component: PremiumMemberComponent;
  let fixture: ComponentFixture<PremiumMemberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PremiumMemberComponent]
    });
    fixture = TestBed.createComponent(PremiumMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
