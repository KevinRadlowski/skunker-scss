import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleListCommentairesComponent } from './article-list-commentaires.component';

describe('ArticleListCommentairesComponent', () => {
  let component: ArticleListCommentairesComponent;
  let fixture: ComponentFixture<ArticleListCommentairesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleListCommentairesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleListCommentairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
