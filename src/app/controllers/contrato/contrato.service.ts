import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Contrato } from './contrato';

@Injectable({
    providedIn: 'root'
})

export class ContratoService {

    endpoint: string = 'contrato';
    headers = new HttpHeaders().set('Content-Type', 'application/json');

    constructor(private http: HttpClient) { }

    add(data: Contrato): Observable<any> {
        let API_URL = `${this.endpoint}/add`;
        return this.http.post<Contrato>(API_URL, data)
            .pipe(
                catchError(this.errorHandler)
            )
    }

    errorHandler(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }

}