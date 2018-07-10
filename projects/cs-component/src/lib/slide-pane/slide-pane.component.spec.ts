import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidePaneComponent } from './slide-pane.component';

describe('SlidePaneComponent', () => {
  let component: SlidePaneComponent;
  let fixture: ComponentFixture<SlidePaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SlidePaneComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidePaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
