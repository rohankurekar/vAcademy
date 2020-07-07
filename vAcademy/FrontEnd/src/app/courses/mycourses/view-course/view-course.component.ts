import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/shared/course.model';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {
  index: number;
  userData
  enrolledCourses
  course: Course;
  constructor(private route: ActivatedRoute,
              private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.index = +this.route.snapshot.params['id'];
    this.userData=JSON.parse(localStorage.getItem('userData'))
    this.enrolledCourses=this.userData.enrolledCourses;
    this.course = this.enrolledCourses[this.index];

    //this.coursesService.fetchEnrolledCourses();
  }

}
