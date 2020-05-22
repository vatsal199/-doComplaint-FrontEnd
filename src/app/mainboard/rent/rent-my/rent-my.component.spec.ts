import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentMyComponent } from './rent-my.component';

describe('RentMyComponent', () => {
  let component: RentMyComponent;
  let fixture: ComponentFixture<RentMyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentMyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentMyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
