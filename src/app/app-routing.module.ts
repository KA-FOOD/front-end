import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArticleComponent } from './add-article/add-article.component';
import { AddFactureComponent } from './add-facture/add-facture.component';
import { DebComponent } from './deb/deb.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent, },
  { path: 'deb', component: DebComponent, pathMatch: 'full' },
  { path: 'add-article', component: AddArticleComponent },
  { path: 'add-facture', component: AddFactureComponent },
  { path: '', redirectTo: '/add-article', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
