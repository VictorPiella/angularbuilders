import { TrackerStoreService } from '@ab/global';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class TrackerInterceptor implements HttpInterceptor {
  constructor(private tracker: TrackerStoreService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        this.tracker.trackEntry({
          category: 'ERROR',
          event: 'HTTP_FAULT',
          label: error.message,
          value: error.status || 0,
        });
        return throwError(error);
      })
    );
  }
}
