import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelmembreComponent } from './panelmembre.component';

describe('PanelmembreComponent', () => {
  let component: PanelmembreComponent;
  let fixture: ComponentFixture<PanelmembreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelmembreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelmembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
