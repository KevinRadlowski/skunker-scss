import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatureChoiceComponent } from './candidature-choice.component';

describe('CandidatureChoiceComponent', () => {
  let component: CandidatureChoiceComponent;
  let fixture: ComponentFixture<CandidatureChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatureChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatureChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
