import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralMemberComponent } from './general-member.component';

describe('GeneralMemberComponent', () => {
  let component: GeneralMemberComponent;
  let fixture: ComponentFixture<GeneralMemberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralMemberComponent]
    });
    fixture = TestBed.createComponent(GeneralMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
