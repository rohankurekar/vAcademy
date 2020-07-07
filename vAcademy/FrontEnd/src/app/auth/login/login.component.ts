import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from '../auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from '../user.model';
import { CoursesService } from 'src/app/services/courses.service';
//import { format } from 'path';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isAdmin = false;
  isLoading = false;
  error: string = null;
  userData:User
  errorLoginFailed
  isAlreadySignedUp=true
  //Observable to emit userlogin
  authObs: Observable<AuthResponseData>;

  constructor(private coursesService: CoursesService, private router: Router
    ,private authenticationService:AuthenticationService) {}

  ngOnInit(): void 
  {
    //this.isAlreadySignedUp=true
    
  }

  handleLogin(form: NgForm) 
  {
    //console.log('login')
    //console.log('localsotage: ',localStorage.getItem('userData'))
    this.isLoading = true;

    if (this.isAdmin) 
    {
      console.log('Admin');
      this.isLoading = false;
      //this.error = 'Admin Component is under construction!';
      this.authenticationService.logout();
      this.authenticationService.setAdmin();
      this.router.navigate(['/courses'])
    } 
    else 
    {
      console.log('student')
      this.handleStudentLogin(form.value.email, form.value.password,false);
    }
    form.reset();
  }

  handleStudentLogin(email: string, password: string,isAdmin:boolean) {
   
    this.authenticationService.authenticateUser(email,password,isAdmin).subscribe(
      response=>{
        this.isLoading=false
        this.isAlreadySignedUp=true //Flag for signed up user: used in html part
        this.userData=response
        console.log("UserData: ",this.userData)
        //Fetch Enrolled Courses
        this.coursesService.fetchEnrolledCourses();
        //Save data in localstorage for further use
        localStorage.setItem('userData',JSON.stringify(this.userData)) 
        this.router.navigate(['/courses']);
    },
    error=>{
      this.isAlreadySignedUp=false
      this.errorLoginFailed=error.error.message
      console.log("Error",this.errorLoginFailed)
      this.isLoading=false
    }
    )
     //this.authObs = this.authService.loginStudent(email, password);
    //this.authObs.subscribe(
    //   (resData) => {
    //     //OnSuccessful Login
    //     this.isLoading = false;
    //     this.router.navigate(['/courses']);
    //     console.log(resData);
        
    //   },
    //   (errorMessage) => {
    //     //On Unsuccessful login
    //     this.error = errorMessage;
    //     this.isLoading = false;
    //   }
    // );
  }
}
