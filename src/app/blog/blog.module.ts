import { NgModule } from '@angular/core';

import { BlogRoutingModule } from './blog-routing.module';
import { ArticleModule } from './article/article.module';
import { ArticlesModule } from './articles/articles.module';

@NgModule({
  declarations: [
  ],
  imports: [
    BlogRoutingModule,
    ArticleModule,
    ArticlesModule
  ],
  exports: [
  ]
})
export class BlogModule { }
