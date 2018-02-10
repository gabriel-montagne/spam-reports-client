import { NgRedux } from '@angular-redux/store';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SpamReportsModule } from './spam-reports/spam-reports.module';
import { SpamReportsActions } from './spam-reports/spam-reports.actions';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    SpamReportsModule
  ],
  providers: [SpamReportsActions],
  exports: [SpamReportsModule]
})
export class ComponentsModule { }
