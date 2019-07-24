import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementsEditComponent } from './agreements-edit.component';

describe('AgreementsEditComponent', () => {
  let component: AgreementsEditComponent;
  let fixture: ComponentFixture<AgreementsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgreementsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreementsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
