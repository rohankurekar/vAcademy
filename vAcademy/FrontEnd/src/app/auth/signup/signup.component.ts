import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  isLoading = false;
  error: string = null;
  isPasswordNotEqule=false
  //Observable to listen incoming response from server
  authObs: Observable<AuthResponseData>;
  userData:User
  singupStatus:String
  constructor(private authService: AuthService,
    private authenticationService:AuthenticationService,
    private router: Router){}
  
  ngOnInit(): void {
  }
  handleSignup(form: NgForm){

    this.userData=new User(-1,"","","","","",false,[])
    this.isLoading = true;
    this.userData.firstName = form.value.firstname;
    this.userData.lastName = form.value.lastName;
    this.userData.mobileNumber = form.value.mobile;
    this.userData.email = form.value.email;
    this.userData.password = form.value.password;
    this.userData.admin=false; 
    
    
    this.authenticationService.signupUser(this.userData).subscribe(
      response=>{
        this.isLoading=false;
        this.singupStatus='SUCCESS'
      },
      error=>{
        this.isLoading=false;
        this.singupStatus='FAIL'
      }
    )
  
  console.log(this.userData)
  //   this.authObs = this.authService.signup(email,password);


  //   this.authObs.subscribe(
  //     (resData)=>{
  //       console.log(resData);
  //       this.isLoading = false;
  //       this.router.navigate(['/']);
  //     },
  //     (errorMessage)=>{
  //       this.error = errorMessage;
  //       this.isLoading = false;
  //     }
  //   );

  //   form.reset();
  }
}
