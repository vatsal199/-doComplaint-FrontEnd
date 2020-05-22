import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestMyComponent } from './request-my.component';

describe('RequestMyComponent', () => {
  let component: RequestMyComponent;
  let fixture: ComponentFixture<RequestMyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestMyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestMyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
