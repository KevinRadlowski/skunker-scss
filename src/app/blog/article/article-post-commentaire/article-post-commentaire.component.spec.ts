import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlePostCommentaireComponent } from './article-post-commentaire.component';

describe('ArticlePostCommentaireComponent', () => {
  let component: ArticlePostCommentaireComponent;
  let fixture: ComponentFixture<ArticlePostCommentaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlePostCommentaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlePostCommentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
