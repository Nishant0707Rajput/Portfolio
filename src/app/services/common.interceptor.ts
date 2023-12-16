import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { commonContants } from '../constants/common';

@Injectable()
export class CommonInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request =request.clone({
      setHeaders:{
        'Content-Type': 'application/json',
        "x-api-key": commonContants.API_KEY,
      }
    });
    return next.handle(request);
  }
}
