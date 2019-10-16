import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeCardsComponent } from './resume-cards.component';

describe('ResumeCardsComponent', () => {
  let component: ResumeCardsComponent;
  let fixture: ComponentFixture<ResumeCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
