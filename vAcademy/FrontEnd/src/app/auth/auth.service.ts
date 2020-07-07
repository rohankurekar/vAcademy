import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';
import { User } from './user.model';
import { Router } from '@angular/router';



//Expected Response from the Server
export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string; //
  expiresIn: string; //3600
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  //user object to be initialized once logged In/Signed up
  //It will emit an event once logged In, Initially null;
  user = new BehaviorSubject<User>(null);

  //ExpirationTimer for the current login session of the user;
  private tokenExpirationTimer: any;


  constructor(private http: HttpClient, private router: Router) {}

  
  signup(email: string, password: string) {
    
    console.log('signup')
  //   return this.http
  //     .post<AuthResponseData>(
  //       'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEYS.firebaseAPIKey,
  //       {
  //         email: email,
  //         password: password,
  //         returnSecureToken: true,
  //       }
  //     )
  //     .pipe(
  //       catchError(this.handleError),
  //       tap((resData) => {
  //         this.handleAuthentication(
  //           resData.email,
  //           resData.localId,
  //           resData.idToken,
  //           +resData.expiresIn
  //         );
  //       })
  //     );
  }
  
  loginStudent(email: string, password: string) {
    console.log('login')
    // return this.http
    //   .post<AuthResponseData>(
    //     'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + API_KEYS.firebaseAPIKey,
    //     {
    //       email: email,
    //       password: password,
    //       returnSecureToken: true,
    //     }
    //   )
    //   .pipe(
    //     catchError(this.handleError),
    //     tap((resData) => {
    //       this.handleAuthentication(
    //         resData.email,
    //         resData.localId,
    //         resData.idToken,
    //         +resData.expiresIn
    //       );
    //     })
    //   );
  }
  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {

    //expiresIn is in seconds(to be recieved from the server)
    //convert it into milliseconds for autologout.
    // const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    
    // //create new user object.
    // const user = new User(email, userId, token, expirationDate);
    
    // //emit new loggedIn user.
    // this.user.next(user); 
    // //ExpiresIn is in seconds

    // //start the autologout timer
    // this.autoLogout(expiresIn * 1000);

    // //store loggedIn user's data in cookies.
    // localStorage.setItem('userData', JSON.stringify(user));
  }
  autoLogin() {
    //Retrieve User cookies;
    // const userData: {
    //   email: string;
    //   id: string;
    //   _token: string;
    //   _tokenExpirationData: string;
    // } = JSON.parse(localStorage.getItem('userData'));
    // if (!userData) {
    //   //return if cookie is empty;
    //   return;
    // }

    //Convert JS object to User object
    // const loadedUser = new User(
    //   userData.email,
    //   userData.id,
    //   userData._token,
    //   new Date(userData._tokenExpirationData)
    // );

    // //If valid user object exists.
    // if (loadedUser.token) {

    //   //Emit user object to all subscribers.
    //   this.user.next(loadedUser);

    //   //get remaining time of the current login session
    //   const expirationDuration =
    //     new Date(userData._tokenExpirationData).getTime() -
    //     new Date().getTime();

    //   //autologout after session expires
    //   this.autoLogout(expirationDuration);
    //}
  }
  logout() {
    // //Invalidate user object
    // this.user.next(null);
    // //redirect to homepage
    // this.router.navigate(['/']);

    // //Clear All Data with
    // // ... localStorage.clear();

    // //Remove userData cookie
    // localStorage.removeItem('userData');

    // //Cleartimer of autologout
    // if (this.tokenExpirationTimer) {
    //   clearTimeout(this.tokenExpirationTimer);
    // }

    // //Invalidate autologout timer
    // this.tokenExpirationTimer = null;
  }

  autoLogout(expirationDuration: number) {
    //ExiprationDuration in milliseconds
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

 

  private handleError(errorRes: HttpErrorResponse) {
    //Default error message
    let errorMessage = 'An unknown error occured!';
    console.log(errorRes.error.error.message);
    //If error message is not recieved due to connection issues
    //Return default error.
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }

    //Check error response codes
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already';
        break;

      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist.';
        break;

      case 'INVALID_PASSWORD':
        errorMessage = 'This password is not correct.';
        break;

      case 'WEAK_PASSWORD : Password should be at least 6 characters': 
        errorMessage = 'Password should be at least 6 characters';
        break;
    }
    return throwError(errorMessage);
  }
}
