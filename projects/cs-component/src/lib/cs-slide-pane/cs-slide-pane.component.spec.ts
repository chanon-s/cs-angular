import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsSlidePaneComponent } from './cs-slide-pane.component';

describe('CsSlidePaneComponent', () => {
  let component: CsSlidePaneComponent;
  let fixture: ComponentFixture<CsSlidePaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CsSlidePaneComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsSlidePaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
