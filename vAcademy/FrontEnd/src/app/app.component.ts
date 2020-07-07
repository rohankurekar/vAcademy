import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { CoursesService } from './services/courses.service';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private authService: AuthService,
              private coursesService: CoursesService,
              private authenticationService: AuthenticationService) {}

  ngOnInit(){
    if(this.authenticationService.isLoggedIn()){
      this.coursesService.fetchEnrolledCourses();
    }
    this.authService.autoLogin();
  }
}
