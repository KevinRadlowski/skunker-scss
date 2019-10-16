import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeCardsItemComponent } from './resume-cards-item.component';

describe('ResumeCardsItemComponent', () => {
  let component: ResumeCardsItemComponent;
  let fixture: ComponentFixture<ResumeCardsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeCardsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeCardsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
