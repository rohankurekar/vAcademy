import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = true;

  constructor(public authenticationServie:AuthenticationService,
    private router:Router,public userInfo:UserDataService) { }

  ngOnInit(): void {
    
    this.isLoggedIn=this.authenticationServie.isLoggedIn()
    console.log('header',this.isLoggedIn)
    // this.userSub = this.authService.user.subscribe(user => {
    //   //If user is not null, set loggedIn to true
    //   this.isLoggedIn = !!user;
    // });
  }

  onLogOut(){
    this.authenticationServie.logout()
    this.router.navigate(['/'])
    //this.authService.logout();
  }
}
