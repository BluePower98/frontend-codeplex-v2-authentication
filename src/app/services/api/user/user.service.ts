import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { environment } from "@environments/environment";

const BASE_URL = environment.apiBaseUrl;
const ENDPOINT_USERS = `${BASE_URL}/Usuarios2`;

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(
        private http: HttpClient
    ) {

    }

    create(data: any): Observable<any> {
        return this.http.post<any>(`${ ENDPOINT_USERS }/create`, data);
    }
    
    validarRuc(ruc: string): Observable<any> {
        return this.http.get<any>(`${ ENDPOINT_USERS }/validar_ruc/${ruc}`);
    }
    
    validateUniqueRuc(ruc: string): Observable<any> {
        return this.http.get<any>(`${ BASE_URL }/Empresas/check-unique-ruc/${ruc}`);
    }
}