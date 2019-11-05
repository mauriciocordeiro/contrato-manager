import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Contrato } from './contrato';
import { MatSnackBar } from '@angular/material';

@Injectable({ providedIn: 'root' })
export class ContratoServices {
    endpoint: String = 'https://contrato-manager.herokuapp.com/contrato';
    headers = new HttpHeaders().set('Content-Type', 'application/json');

    constructor(
        private http: HttpClient,
        private snackBar: MatSnackBar
    ) { };

    // CREATE =================================================================
    create(data: Contrato): Observable<any> {
        const url = `${this.endpoint}/create-contrato`;
        return this.http.post(url, data)
            .pipe(
                catchError(this.errorHandler)
            );
    }

    // READ ===================================================================
    readAll() {
        return this.http.get(`${this.endpoint}`);
    }

    read(id): Observable<any> {
        const url = `${this.endpoint}/read-contrato/${id}`;
        return this.http.get(url, { headers: this.headers })
            .pipe(
                map((res: Response) => {
                    return res || {}
                }),
                catchError(this.errorHandler)
            );
    }

    getAll() {
        const url = `${this.endpoint}/read-contrato-empresa/`;
        return this.http.get(url, { headers: this.headers })
            .pipe(
                map((res: Response) => {
                    return res || {}
                }),
                catchError(this.errorHandler)
            );
    }

    // UPDATE =================================================================
    update(id, data: Contrato): Observable<any> {
        const url = `${this.endpoint}/update-contrato/${id}`;
        return this.http.put(url, data, { headers: this.headers })
            .pipe(
                catchError(this.errorHandler)
            );
    }

    // DELETE =================================================================
    delete(id): Observable<any> {
        const url = `${this.endpoint}/delete-contrato/${id}`;
        return this.http.delete(url)
            .pipe(
                catchError(this.errorHandler)
            );
    }

    // ERROR ================================================================== 
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

        this.snackBar.open(errorMessage, 'OK', {
            duration: 3000,
            panelClass: ['erro-snackbar']
        });

        return throwError(errorMessage);
    }
}