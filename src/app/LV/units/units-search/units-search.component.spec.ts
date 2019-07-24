import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitsSearchComponent } from './units-search.component';

describe('UnitsSearchComponent', () => {
  let component: UnitsSearchComponent;
  let fixture: ComponentFixture<UnitsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
