import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ActivatedRouteSnapshot } from '@angular/router';
import { SpamReportsActions } from '../../spam-reports/spam-reports.actions';
import { ISpamReport, SpamReports } from '../../spam-reports/spam-reports';

export interface ISpamReportsStore {
  spamReports: ISpamReport[];
}

export const INITIAL_STATE: ISpamReportsStore = {
  spamReports: []
};

export function SpamReportsReducer(state: ISpamReportsStore = INITIAL_STATE,
                             action: any): ISpamReportsStore {
  switch (action.type) {
    case SpamReportsActions.SAVE_SPAM_REPORTS:
      return { ...state, spamReports: action.payload};
    case SpamReportsActions.SAVE_SPAM_REPORT:
      const spamReports = state.spamReports;
      const idx = spamReports.findIndex((elem) => {
        return elem.id === action.payload.spamReport.id;
      });
      if (idx > -1) {
        const item = spamReports[idx];
        spamReports.splice(idx, 1, action.payload.spamReport);
      }
      return { ...state, spamReports: spamReports};
    default:
      return state;
  }
}
