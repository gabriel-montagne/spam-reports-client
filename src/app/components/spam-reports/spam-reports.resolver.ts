import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SpamReportsService } from './spam-reports.service';
import { SpamReportsActions } from './spam-reports.actions';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../core/store/store.module';
import { SpamReports } from './spam-reports';

@Injectable()
export class SpamReportsResolver implements Resolve<any> {
  constructor(
    private _spamReportsService: SpamReportsService,
    private _spamReportsActions: SpamReportsActions,
    private _ngRedux: NgRedux<IAppState>
  ) {
  }
  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this._spamReportsService.getSpamReports()
      .subscribe(
        (result: any) => {
          const spamReportsJSON = result;
          const spamReports = spamReportsJSON.map((element) => {
            return new SpamReports(element);
          })
          this._spamReportsActions.saveSpamReports(spamReports);
          return;
        },
        (error: any) => {
          console.error(error);
        }
      );
  }
}
