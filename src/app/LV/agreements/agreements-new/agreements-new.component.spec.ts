import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementsNewComponent } from './agreements-new.component';

describe('AgreementsNewComponent', () => {
  let component: AgreementsNewComponent;
  let fixture: ComponentFixture<AgreementsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgreementsNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreementsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
