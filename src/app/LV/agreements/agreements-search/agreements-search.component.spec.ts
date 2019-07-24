import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementsSearchComponent } from './agreements-search.component';

describe('AgreementsSearchComponent', () => {
  let component: AgreementsSearchComponent;
  let fixture: ComponentFixture<AgreementsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgreementsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreementsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
