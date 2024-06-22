import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DebComponent } from './deb/deb.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { AddFactureComponent } from './add-facture/add-facture.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AddArticleComponent,
    DebComponent,
    AddFactureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DebComponent,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
