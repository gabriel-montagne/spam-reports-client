import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpamReportsActions } from './spam-reports.actions';
import { SpamReportsComponent } from './spam-reports.component';
import { SpamReportsService } from './spam-reports.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    SpamReportsActions,
    SpamReportsService
  ],
  declarations: [SpamReportsComponent],
  exports: [SpamReportsComponent]
})

export class SpamReportsModule {}
