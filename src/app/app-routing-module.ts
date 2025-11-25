import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AutoList} from './components/auto-list/auto-list';
import {BookList} from './components/book-list/book-list';
import {AutoDetails} from './components/auto-details/auto-details';
import {AutoForm} from './components/auto-form/auto-form';

const routes: Routes = [
  {path: 'auto-list', component: AutoList},
  {path: 'book-list', component: BookList},
  {path: 'auto-details/:id', component: AutoDetails},
  {path: 'auto-form', component: AutoForm},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
