import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WellsSearchComponent } from './wells-search.component';

describe('WellsSearchComponent', () => {
  let component: WellsSearchComponent;
  let fixture: ComponentFixture<WellsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WellsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WellsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
