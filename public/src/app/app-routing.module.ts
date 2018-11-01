import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewAuthorComponent } from './new-author/new-author.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';
import { HomeComponent } from './home/home.component';
import { ShowAuthorComponent } from './show-author/show-author.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: '', pathMatch:"full", component: HomeComponent },
  { path: 'authors/new', component: NewAuthorComponent },
  { path: 'quotes/new/:author_id', component: NewQuoteComponent },
  { path: 'authors/:author_id', component: ShowAuthorComponent },
  { path: 'edit/:author_id', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
