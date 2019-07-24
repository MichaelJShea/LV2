import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitsNewComponent } from './units-new.component';

describe('UnitsNewComponent', () => {
  let component: UnitsNewComponent;
  let fixture: ComponentFixture<UnitsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitsNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
