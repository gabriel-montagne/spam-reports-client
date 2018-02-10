import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SpamReportsService {
  public url = 'http://localhost:8080/api/spamreports';
  public token = '640cba331ea22491f11f6c2a07426cd5ed1f5a51';

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
