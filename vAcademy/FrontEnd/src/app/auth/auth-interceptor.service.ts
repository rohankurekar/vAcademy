import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpParams,
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { take, exhaustMap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    let userName = "v-user"
    let password = "v-password"
    //encoding
    let basicHttpheader = "Basic " + window.btoa(userName + ':' + password)
    req = req.clone( 
      {
        setHeaders: {
          Authorization: basicHttpheader
        }
      })

      return next.handle(req)
  
  }

}
