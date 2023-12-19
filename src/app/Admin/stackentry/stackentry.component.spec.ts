import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackentryComponent } from './stackentry.component';

describe('StackentryComponent', () => {
  let component: StackentryComponent;
  let fixture: ComponentFixture<StackentryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StackentryComponent]
    });
    fixture = TestBed.createComponent(StackentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
