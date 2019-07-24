import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnersSearchComponent } from './owners-search.component';

describe('OwnersSearchComponent', () => {
  let component: OwnersSearchComponent;
  let fixture: ComponentFixture<OwnersSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnersSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnersSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
