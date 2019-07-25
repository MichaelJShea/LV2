import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TractsComponent } from './tracts.component';

describe('TractsComponent', () => {
  let component: TractsComponent;
  let fixture: ComponentFixture<TractsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TractsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
