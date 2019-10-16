import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSimilarComponent } from './article-similar.component';

describe('ArticleSimilarComponent', () => {
  let component: ArticleSimilarComponent;
  let fixture: ComponentFixture<ArticleSimilarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleSimilarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleSimilarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
