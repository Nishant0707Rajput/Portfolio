import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { commonContants } from '../constants/common';
import { HttpService } from './http-service.service';

@Injectable()
export class CommonInterceptor implements HttpInterceptor {
  constructor(private _http: HttpService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        'x-api-key': commonContants.API_KEY,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE',
        'Access-Control-Allow-Headers': 'X-Requested-With,content-type'
      },
    });
    return next.handle(request).pipe(
      tap(() => {
        this._http.loader.next(true);
      }),
      catchError((error: HttpErrorResponse) => {
        this._http.loader.next(false);
        return throwError(error);
      }),
      tap((event) => {
        if (event.type === HttpEventType.Response) {
          this._http.loader.next(false);
        }
      })
    );
  }
}


