import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsEntryComponent } from './products-entry.component';

describe('ProductsEntryComponent', () => {
  let component: ProductsEntryComponent;
  let fixture: ComponentFixture<ProductsEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsEntryComponent]
    });
    fixture = TestBed.createComponent(ProductsEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
