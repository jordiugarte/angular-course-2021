import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class Api {
  url = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getTransactions(): Observable<any> {
    return this.http.get(this.url + 'transactions.json');
  }

  public getWallets(): Observable<any> {
    return this.http.get(this.url + 'wallets.json');
  }

  public delete(key: string): Observable<any> {
    return this.http.delete(this.url + 'unvaccinated/' + key + '.json');
  }

  public vaccine(element: any): Observable<any> {
    return this.http.post(this.url + 'vaccinated.json', element);
  }

  public addDose(id: string, body: any): Observable<any> {
    return this.http.put(this.url + 'unvaccinated/' + id + '.json', body);
  }
}
