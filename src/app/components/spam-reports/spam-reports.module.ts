import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpamReportsActions } from './spam-reports.actions';
import { SpamReportsComponent } from './spam-reports.component';
import { SpamReportsService } from './spam-reports.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SpamReportsResolver } from './spam-reports.resolver';

const ROUTES: Routes = [
  {
    path: '',
    component: SpamReportsComponent,
    resolve: {
      spamReportsResolver: SpamReportsResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ROUTES),
  ],
  providers: [
    SpamReportsActions,
    SpamReportsService,
    SpamReportsResolver
  ],
  declarations: [SpamReportsComponent],
  exports: [SpamReportsComponent]
})

export class SpamReportsModule {}
