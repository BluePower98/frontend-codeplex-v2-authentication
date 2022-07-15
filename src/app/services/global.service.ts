import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "@environments/environment";
import { map } from 'rxjs/operators';

const BASE_URL = environment.apiBaseUrl;

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(
    private http: HttpClient
  ) {}

  getMeses(): Observable<any> {
    return this.http.get(`${ BASE_URL }/v1/months`)
      .pipe(
        map((res: any) => res.data)
      )
  }

  getAnio(): Observable<any> {
    return this.http.get(`${ BASE_URL }/v1/years`)
      .pipe(
        map((res: any) => res.data)
      )
  }
}
