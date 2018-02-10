import { NgRedux } from '@angular-redux/store';
import { Injectable } from '@angular/core';
import { IAppState } from '../core/store/store.module';

@Injectable()
export class SpamReportsActions {
  public static readonly SAVE_SPAM_REPORTS = 'SAVE_SPAM_REPORTS';
  public static readonly SAVE_SPAM_REPORT = 'SAVE_SPAM_REPORT';

  constructor(
    private _ngRedux: NgRedux<IAppState>
  ) {

  }

  public saveSpamReports(spamReports: {} ) {
    return this._ngRedux.dispatch({type: SpamReportsActions.SAVE_SPAM_REPORTS, payload: spamReports});
  }

  public saveSpamReport(spamReport: {} ) {
    const payload_ = { spamReport };
    return this._ngRedux.dispatch({type: SpamReportsActions.SAVE_SPAM_REPORT, payload: payload_});
  }
}
