import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CContactComponent } from './c-contact.component';

describe('CContactComponent', () => {
  let component: CContactComponent;
  let fixture: ComponentFixture<CContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CContactComponent]
    });
    fixture = TestBed.createComponent(CContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
