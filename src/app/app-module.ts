import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { Navbar } from './components/navbar/navbar';
import { AutoList } from './components/auto-list/auto-list';
import { BookList } from './components/book-list/book-list';
import { AutoDetails } from './components/auto-details/auto-details';
import { AutoForm } from './components/auto-form/auto-form';


@NgModule({
  declarations: [
    App,
    Navbar,
    AutoList,
    BookList,
    AutoDetails,
    AutoForm,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [App]
})
export class AppModule { }
