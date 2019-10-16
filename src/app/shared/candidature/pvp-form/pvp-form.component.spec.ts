import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PvpFormComponent } from './pvp-form.component';

describe('PvpFormComponent', () => {
  let component: PvpFormComponent;
  let fixture: ComponentFixture<PvpFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PvpFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PvpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
