import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StRegisterComponent } from './st-register.component';

describe('StRegisterComponent', () => {
  let component: StRegisterComponent;
  let fixture: ComponentFixture<StRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
