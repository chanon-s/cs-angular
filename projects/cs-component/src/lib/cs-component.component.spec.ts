import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsComponentComponent } from './cs-component.component';

describe('CsComponentComponent', () => {
  let component: CsComponentComponent;
  let fixture: ComponentFixture<CsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
