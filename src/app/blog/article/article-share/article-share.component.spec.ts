import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleShareComponent } from './article-share.component';

describe('ArticleShareComponent', () => {
  let component: ArticleShareComponent;
  let fixture: ComponentFixture<ArticleShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
