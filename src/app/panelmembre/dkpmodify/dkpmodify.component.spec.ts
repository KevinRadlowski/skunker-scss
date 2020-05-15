import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DkpmodifyComponent } from './dkpmodify.component';

describe('DkpmodifyComponent', () => {
  let component: DkpmodifyComponent;
  let fixture: ComponentFixture<DkpmodifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DkpmodifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DkpmodifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
