import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/shared/course.model';
import { ActivatedRouteSnapshot, ActivatedRoute, Params } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';
import { User } from 'src/app/auth/user.model';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  course: Course;
  index: number; 
  user: User;
  isEnrolled: boolean = false;
  constructor(private route: ActivatedRoute,
              private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('userData'));
    let enrolledCourses = this.user.enrolledCourses;

    this.index = +this.route.snapshot.params['id'];
    this.course = this.coursesService.getAvailableCourse(this.index);

    for(let i in enrolledCourses){
      if(enrolledCourses[i]['name'] == this.course.name){
        this.isEnrolled = true;
        break;
      }
    }
  }

  enrollCourse(){

  }

}
