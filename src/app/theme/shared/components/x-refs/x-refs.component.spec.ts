import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XRefsComponent } from './x-refs.component';

describe('XRefsComponent', () => {
  let component: XRefsComponent;
  let fixture: ComponentFixture<XRefsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XRefsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XRefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
