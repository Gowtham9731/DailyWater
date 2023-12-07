import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferzoneComponent } from './offerzone.component';

describe('OfferzoneComponent', () => {
  let component: OfferzoneComponent;
  let fixture: ComponentFixture<OfferzoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfferzoneComponent]
    });
    fixture = TestBed.createComponent(OfferzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
