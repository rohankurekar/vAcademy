import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../auth/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isAdmin = false;

  constructor(private http: HttpClient) { }

  //Basic check for password

  setAdmin(){
    this.isAdmin = true;
  }

  checkPassword()
  {

  }

  //check if user is logged in or not
  isLoggedIn()
  {
    let user=localStorage.getItem('userData')

    if(user===null)
    {
      return false
    }
    else
    {
      return true
    }
  }

  //For checking a if user is valid or not 
  authenticateUser(email, password, isAdmin) {

    // let basicheaderString = this.createHttpHeader()

    // //Creating header to pass it with request : spring security
    // let auth_Header = new HttpHeaders({
    //   Authorization: basicheaderString
    // })
    let auth_Header = this.createHttpHeader()
    //return this.http.get<User>(`http://localhost:8080/users/login/${email}/${password}/${isAdmin}`,
    //{headers:auth_Header})
    return this.http.get<User>(`http://localhost:8080/users/login/${email}/${password}/${isAdmin}`)
  }
 
  //For Spring security we need HTTP header 
  createHttpHeader() {
    //credentials for accessing v-academy spring services
    let userName = "v-user"
    let password = "v-password"
    //encoding
    let basicHttpheader = "Basic " + window.btoa(userName + ':' + password)
    let auth_Header = new HttpHeaders({
      Authorization: basicHttpheader
    })

    return auth_Header
  }

  signupUser(userInfo:User)
  {
    let auth_Header = this.createHttpHeader() 

    //return this.http.post(`http://localhost:8080/users/all`,userInfo,{headers:auth_Header})
    return this.http.post(`http://localhost:8080/users/all`,userInfo)
  }

  //logout 
  logout()
  {
    localStorage.removeItem('userData');

  }

  getAllUsers(){
    return this.http.get<User>(`http://localhost:8080/users/getall`)
  }

}
