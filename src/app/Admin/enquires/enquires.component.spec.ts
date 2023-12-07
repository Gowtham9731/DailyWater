import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiresComponent } from './enquires.component';

describe('EnquiresComponent', () => {
  let component: EnquiresComponent;
  let fixture: ComponentFixture<EnquiresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnquiresComponent]
    });
    fixture = TestBed.createComponent(EnquiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
