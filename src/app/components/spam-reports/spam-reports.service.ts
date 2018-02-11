import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable()
export class SpamReportsService {
  public url = environment.apiUrl;
  public token = environment.apiToken;

  constructor(
    private _apiHttp: HttpClient
  ) {}

  public getSpamReports() {
    return this._apiHttp.get(this.url);
  }

  public setSpamReportStatus(id: string, status: string) {
    const payload = {
      status
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + this.token
      })
    };
    return this._apiHttp.put(this.url + '/' + id + '/', payload, httpOptions);
  }
}
