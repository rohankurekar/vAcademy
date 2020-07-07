import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/shared/course.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  @Input() course: Course;
  @Input() index: number;
  constructor() { }

  ngOnInit(): void {
  }
 
  openCourse(){
    console.log(this.index);
  }

}
