import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SpamReportsComponent } from './components/spam-reports/spam-reports.component';


@NgModule({
  declarations: [
    AppComponent,
    SpamReportsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
