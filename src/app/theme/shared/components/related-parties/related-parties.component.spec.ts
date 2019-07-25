import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedPartiesComponent } from './related-parties.component';

describe('RelatedPartiesComponent', () => {
  let component: RelatedPartiesComponent;
  let fixture: ComponentFixture<RelatedPartiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedPartiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedPartiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
