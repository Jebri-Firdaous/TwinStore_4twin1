import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CAproposComponent } from './c-apropos.component';

describe('CAproposComponent', () => {
  let component: CAproposComponent;
  let fixture: ComponentFixture<CAproposComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CAproposComponent]
    });
    fixture = TestBed.createComponent(CAproposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
