import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesNewComponent } from './cases-new.component';

describe('CasesNewComponent', () => {
  let component: CasesNewComponent;
  let fixture: ComponentFixture<CasesNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasesNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
