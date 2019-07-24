import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesSearchComponent } from './cases-search.component';

describe('CasesSearchComponent', () => {
  let component: CasesSearchComponent;
  let fixture: ComponentFixture<CasesSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasesSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
