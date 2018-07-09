import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CsComponentModule } from 'cs-component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CsComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
