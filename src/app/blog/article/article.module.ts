import { NgModule } from '@angular/core';

import { ArticleComponent } from './article.component';
import { ArticleContentComponent } from './article-content/article-content.component';
import { ArticleShareComponent } from './article-share/article-share.component';
import { ArticleSimilarComponent } from './article-similar/article-similar.component';
import { ArticleSimilarItemComponent } from './article-similar/article-similar-item/article-similar-item.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { ArticlePostCommentaireComponent } from './article-post-commentaire/article-post-commentaire.component';
import { ArticleListCommentairesComponent } from './article-list-commentaires/article-list-commentaires.component';


@NgModule({
    declarations: [
        ArticleComponent,
        ArticleContentComponent,
        ArticleShareComponent,
        ArticleSimilarComponent,
        ArticleSimilarItemComponent,
        ArticlePostCommentaireComponent,
        ArticleListCommentairesComponent,
    ],
    imports: [
        SharedModule,
    ]
})
export class ArticleModule { }
