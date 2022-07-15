import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from "@environments/environment";
import { map } from "rxjs/operators";

const BASE_URL = environment.apiBaseUrl;

@Injectable({
    providedIn: 'root'
})
export class PlanService {

    constructor(
        private http: HttpClient
    ) {}

    getPlans(): Observable<any> {
        return this.http.get(`${ BASE_URL }/v1/plans`)
            .pipe(
                map((res: any) => res.data)
            )
    }
}