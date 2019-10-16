import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PveFormComponent } from './pve-form.component';

describe('PveFormComponent', () => {
  let component: PveFormComponent;
  let fixture: ComponentFixture<PveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
