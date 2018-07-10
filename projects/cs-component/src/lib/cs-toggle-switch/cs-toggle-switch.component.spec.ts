import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsToggleSwitchComponent } from './cs-toggle-switch.component';

describe('CsToggleSwitchComponent', () => {
  let component: CsToggleSwitchComponent;
  let fixture: ComponentFixture<CsToggleSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsToggleSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsToggleSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
