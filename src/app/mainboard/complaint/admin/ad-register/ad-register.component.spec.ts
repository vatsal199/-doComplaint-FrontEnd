import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdRegisterComponent } from './ad-register.component';

describe('AdRegisterComponent', () => {
  let component: AdRegisterComponent;
  let fixture: ComponentFixture<AdRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
