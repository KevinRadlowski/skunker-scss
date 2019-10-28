import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSimilarItemComponent } from './article-similar-item.component';

describe('ArticleSimilarItemComponent', () => {
  let component: ArticleSimilarItemComponent;
  let fixture: ComponentFixture<ArticleSimilarItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleSimilarItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleSimilarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
