import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentAllComponent } from './rent-all.component';

describe('RentAllComponent', () => {
  let component: RentAllComponent;
  let fixture: ComponentFixture<RentAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
