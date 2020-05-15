import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DkphistoriqueComponent } from './dkphistorique.component';

describe('DkphistoriqueComponent', () => {
  let component: DkphistoriqueComponent;
  let fixture: ComponentFixture<DkphistoriqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DkphistoriqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DkphistoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
