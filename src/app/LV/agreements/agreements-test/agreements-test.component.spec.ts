import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementsTestComponent } from './agreements-test.component';

describe('AgreementsTestComponent', () => {
  let component: AgreementsTestComponent;
  let fixture: ComponentFixture<AgreementsTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgreementsTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreementsTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
