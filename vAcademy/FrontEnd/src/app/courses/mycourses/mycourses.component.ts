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
  enrolledCourses: Course[]
  userData:User
  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.userData=JSON.parse(localStorage.getItem('userData'))
    //console.log("My Courses: ",this.userData.enrolledCourses)
    //this.enrolledCourses = this.coursesService.getEnrolledCourses();
    this.enrolledCourses=this.userData.enrolledCourses;
    console.log("Enrolled Courses: ",this.enrolledCourses)
    let mycourse;MycoursesComponent
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
