import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WellsNewComponent } from './wells-new.component';

describe('WellsNewComponent', () => {
  let component: WellsNewComponent;
  let fixture: ComponentFixture<WellsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WellsNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WellsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
