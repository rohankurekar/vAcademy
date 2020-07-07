import { Injectable } from '@angular/core';
import { User } from '../auth/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  userData
  constructor() 
  {
    //console.log('userService')
  this.userData=JSON.parse(localStorage.getItem('userData'))

  }

  getFirstName(): string
  {
    this.userData=JSON.parse(localStorage.getItem('userData'))
    
    return this.userData.firstName
  }
  getLastName()
  {
    this.userData=JSON.parse(localStorage.getItem('userData'))
    return this.userData.lastName
  }
  getEmail()
  {
    this.userData=JSON.parse(localStorage.getItem('userData'))
    return this.userData.email
  }
  getMobile()
  {
    this.userData=JSON.parse(localStorage.getItem('userData'))
    return this.userData.mobileNumber
  }
  getUID()
  {
    this.userData=JSON.parse(localStorage.getItem('userData'))
    return this.userData.id
  }
  getAdminStatus()
  {
    this.userData=JSON.parse(localStorage.getItem('userData'))
    return this.userData.admin
  }
}
