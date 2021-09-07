import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable()
export class Api {
  url = environment.url;

  constructor(private http: HttpClient) {}

  public getVaccinated(): Observable<any> {
    return this.http.get(this.url + 'vaccinated.json');
  }

  public getUnvaccinated(): Observable<any> {
    return this.http.get(this.url + 'unvaccinated.json');
  }

  public delete(key: string): Observable<any> {
    return this.http.delete(this.url + 'unvaccinated/' + key + '.json');
  }

  public vaccine(element: any): Observable<any> {
    return this.http.post(this.url + 'vaccinated.json', element);
  }

  public addDose(id: string, body: any): Observable<any> {
    return this.http.put(this.url + id + '.json', body);
  }
}
