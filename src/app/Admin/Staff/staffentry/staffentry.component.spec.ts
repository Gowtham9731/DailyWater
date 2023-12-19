import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffentryComponent } from './staffentry.component';

describe('StaffentryComponent', () => {
  let component: StaffentryComponent;
  let fixture: ComponentFixture<StaffentryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaffentryComponent]
    });
    fixture = TestBed.createComponent(StaffentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
