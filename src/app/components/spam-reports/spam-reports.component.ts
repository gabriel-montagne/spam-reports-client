import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { SpamReportsService } from './spam-reports.service';
import { Observable } from 'rxjs/Observable';
import { SpamReportsActions } from './spam-reports.actions';
import { IAppState } from '../core/store/store.module';
import { ISpamReport, SpamReports } from './spam-reports';

@Component({
  templateUrl: './spam-reports.component.html',
  selector: 'app-spam-reports',
  styleUrls: ['./spam-reports.component.scss']
})
export class SpamReportsComponent implements OnInit {

  public spamReports: ISpamReport[];

  @select(['data', 'spamReports'])
  private _spamReports$: Observable<any>;

  constructor(
    private _spamReportsService: SpamReportsService,
    private _spamReportsActions: SpamReportsActions,
    private _ngRedux: NgRedux<IAppState>
  ) {
    this._spamReports$.subscribe((spamReports) => { this.spamReports = spamReports; });
  }

  public blockReport(spamReport): void {
    this._spamReportsService.setSpamReportStatus(spamReport.id, 'BLOCKED')
      .subscribe(
        (result: any) => {
          const spamReportEdited = new SpamReports(result);
          this._spamReportsActions.saveSpamReport(spamReportEdited);
        },
        (error: any) => {
          console.log(error);
        }
      );
  }

  public resolveReport(spamReport): void {
    this._spamReportsService.setSpamReportStatus(spamReport.id, 'RESOLVED')
      .subscribe(
        (result: any) => {
          const spamReportEdited = new SpamReports(result);
          this._spamReportsActions.saveSpamReport(spamReportEdited);
        },
        (error: any) => {
          console.log(error);
        }
      );
  }

  ngOnInit() {
  }

}
