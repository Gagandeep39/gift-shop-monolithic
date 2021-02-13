/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-28 12:54:38
 * @modify date 2021-01-28 12:54:38
 * @desc [description]
 */
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GlobalErrorModalService } from '../services/global-error-modal.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private modalService: GlobalErrorModalService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error?.error?.message !== 'FieldException') // Ignore for Validation error
          this.handleErrorResponse(error);
        return throwError(error);
      })
    );
  }

  handleErrorResponse(error: HttpErrorResponse) {
    if (error instanceof HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        console.error('Error Event');
      } else {
        console.log(`error status : ${error.status} ${error.statusText}`);
        switch (error.status) {
          case 404:
            this.modalService.open('Error 404: Service not ready');
            break;
          case 403:
            this.modalService.open('Error 403: Access Denied');
            break;
          case 500:
            this.modalService.open(
              "Error 500: Server couldn't process the request, Retry"
            );
            break;
          default:
            this.modalService.open(`Error ${error.status} Something went wrong while connecting to server`)
        }
      }
    } else {
      console.error('some thing else happened');
    }
  }
}
