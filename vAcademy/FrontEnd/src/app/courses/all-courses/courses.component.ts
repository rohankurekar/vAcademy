import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/shared/course.model';
import { CoursesService } from 'src/app/services/courses.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/auth/user.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  isAdmin: boolean; 
  availableCourses
  constructor(private coursesService: CoursesService,
              private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.coursesService.fetchCourses().subscribe(

      response=>{
        this.availableCourses=response
        this.coursesService.setAvailableCourses(this.availableCourses);
        //console.log("AllCourses: ",response)
      },
      error=>{}
    );
    this.isAdmin = this.authenticationService.isAdmin;
  }
  
}
