import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/shared/course.model'; 
import { CoursesService } from 'src/app/services/courses.service';
import { User } from 'src/app/auth/user.model';


@Component({
  selector: 'app-mycourses',
  templateUrl: './mycourses.component.html',
  styleUrls: ['./mycourses.component.css']
})
export class MycoursesComponent implements OnInit {

  //Create API
  enrolledCourses
  createdCourses
  userData:User
  checktype
  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    
    this.userData=JSON.parse(localStorage.getItem('userData'))
    //console.log("My Courses: ",this.userData.enrolledCourses)
    //this.enrolledCourses = this.coursesService.getEnrolledCourses();
    //this.enrolledCourses=this.userData.enrolledCourses;
    //console.log("Enrolled Courses: ",this.enrolledCourses)
    
   
    let userId=this.userData['id'];
    console.log("id --",userId)

    this.coursesService.getEnrolledCourses(userId).subscribe(

      response=>{
        this.enrolledCourses=response
        //this.coursesService.setAvailableCourses(this.availableCourses);
        console.log("enrolled Courses: ",response)
      },
      error=>{}
    );
    /*
    this.createdCourses = this.coursesService.getCreatedCourses(userId);
    console.log("created course ",this.createdCourses)
    let mycourse;MycoursesComponent
*/
    this.coursesService.getCreatedCourses(userId).subscribe(

      response=>{
        this.createdCourses=response
        //this.coursesService.setAvailableCourses(this.availableCourses);
        console.log("created Courses: ",response)
      },
      error=>{}
    );
   /*
   let userData=JSON.parse(localStorage.getItem('userData'));
    let userId=userData['id'];
    this.enrolledCourses = this.coursesService.getEnrolledCourses(userId);
    console.log("Enrolled Courses: ",this.enrolledCourses)
    */
  }
 
  refresh()
  {
    this.userData=JSON.parse(localStorage.getItem('userData'))
    //console.log("My Courses: ",this.userData.enrolledCourses)
    //this.enrolledCourses = this.coursesService.getEnrolledCourses();
    this.enrolledCourses=this.userData.enrolledCourses;
    console.log("Enrolled Courses: ",this.enrolledCourses)
   

  }
  

}
