import { NgRedux } from '@angular-redux/store';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SpamReportsModule } from './spam-reports/spam-reports.module';
import { SpamReportsActions } from './spam-reports/spam-reports.actions';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


const ROUTES: Routes = [
  { path: '',
    loadChildren: './spam-reports/spam-reports.module#SpamReportsModule'}
];


@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  providers: [SpamReportsActions],
  exports: [SpamReportsModule]
})
export class ComponentsModule { }
