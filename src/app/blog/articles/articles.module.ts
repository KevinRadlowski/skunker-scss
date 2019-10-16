import { NgModule } from '@angular/core';

import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleItemComponent } from './article-item/article-item.component';
import { AboutAuthorComponent } from './about-author/about-author.component';
import { MostPopularListComponent } from './most-popular-list/most-popular-list.component';
import { MostPopularItemComponent } from './most-popular-item/most-popular-item.component';
import { ArticlesComponent } from './articles.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { BlogTagsComponent } from './blog-tags/blog-tags.component';

@NgModule({
    declarations: [
        ArticleListComponent,
        ArticleItemComponent,
        AboutAuthorComponent,
        MostPopularListComponent,
        MostPopularItemComponent,
        ArticlesComponent,
        BlogTagsComponent
    ],
    imports: [
        SharedModule,
    ],
})
export class ArticlesModule { }
