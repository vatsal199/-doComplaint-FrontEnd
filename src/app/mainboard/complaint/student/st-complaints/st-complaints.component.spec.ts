import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StComplaintsComponent } from './st-complaints.component';

describe('StComplaintsComponent', () => {
  let component: StComplaintsComponent;
  let fixture: ComponentFixture<StComplaintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StComplaintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
