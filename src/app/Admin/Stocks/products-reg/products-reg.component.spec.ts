import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsRegComponent } from './products-reg.component';

describe('ProductsRegComponent', () => {
  let component: ProductsRegComponent;
  let fixture: ComponentFixture<ProductsRegComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsRegComponent]
    });
    fixture = TestBed.createComponent(ProductsRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
