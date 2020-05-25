import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdComplaintsComponent } from './ad-complaints.component';

describe('AdComplaintsComponent', () => {
  let component: AdComplaintsComponent;
  let fixture: ComponentFixture<AdComplaintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdComplaintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
