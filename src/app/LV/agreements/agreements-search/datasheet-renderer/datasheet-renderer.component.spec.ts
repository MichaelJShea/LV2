import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasheetRendererComponent } from './datasheet-renderer.component';

describe('DatasheetRendererComponent', () => {
  let component: DatasheetRendererComponent;
  let fixture: ComponentFixture<DatasheetRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatasheetRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasheetRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
