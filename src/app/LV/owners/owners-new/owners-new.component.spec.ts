import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnersNewComponent } from './owners-new.component';

describe('OwnersNewComponent', () => {
  let component: OwnersNewComponent;
  let fixture: ComponentFixture<OwnersNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnersNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnersNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
