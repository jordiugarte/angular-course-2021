import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable()
export class Api {
  vaccinated_url = environment.vaccinated_url;
  unvaccinated_url = environment.unvaccinated_url;

  constructor(private http: HttpClient) {}

  public getVaccinated(): Observable<any> {
    return this.http.get(`${this.vaccinated_url}`);
  }

  public getUnvaccinated(): Observable<any> {
    return this.http.get(`${this.unvaccinated_url}`);
  }
}
