import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InscriptionComponent } from './core/authentification/inscription/inscription.component';
import { ConnexionComponent } from './core/authentification/connexion/connexion.component';
import { ArticlesComponent } from './blog/articles/articles.component';
import { ArticleComponent } from './blog/article/article.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'blog',  component: ArticlesComponent, children: [
    { path: 'article/:id', component: ArticleComponent},
  ]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
