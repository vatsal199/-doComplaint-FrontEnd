import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopMyComponent } from './shop-my.component';

describe('ShopMyComponent', () => {
  let component: ShopMyComponent;
  let fixture: ComponentFixture<ShopMyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopMyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopMyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
