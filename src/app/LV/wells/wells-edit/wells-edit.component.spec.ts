import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WellsEditComponent } from './wells-edit.component';

describe('WellsEditComponent', () => {
  let component: WellsEditComponent;
  let fixture: ComponentFixture<WellsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WellsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WellsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
