import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DebComponent } from './deb/deb.component';
import { AddArticleComponent } from './add-article/add-article.component';


const routes: Routes = [
  { path: '', component: DebComponent},
  { path: 'add-article', component: AddArticleComponent },
  // { path: 'add-facture', component: AddFactureComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
