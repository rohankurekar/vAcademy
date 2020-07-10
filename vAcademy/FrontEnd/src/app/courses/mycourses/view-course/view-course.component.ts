import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/shared/course.model';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {
  index: number;
  userData
  enrolledCourses
  createdCourses
  lessons
  less
  video
  safeURL
  course: Course;

  constructor(private route: ActivatedRoute,
    private coursesService: CoursesService, private _sanitizer: DomSanitizer) {
    
  }

  ngOnInit(): void {
    this.index = +this.route.snapshot.params['id'];
    this.userData = JSON.parse(localStorage.getItem('userData'))
    let userId=this.userData['id'];
    this.enrolledCourses = this.userData.enrolledCourses;
    this.createdCourses=this.userData.createdCourses;
    
    if(this.index>0){
     
      this.course = this.enrolledCourses[this.index-1];
      this.create2()
    }else{
      
      
      this.createdCourses=this.coursesService.getCreatedCourses(userId).subscribe(

        response=>{
          this.createdCourses=response
          //this.coursesService.setAvailableCourses(this.availableCourses);
          console.log("created Courses:jj ",response)
          console.log("created Courses:jk ",this.createdCourses)
          this.create(response)
        },
        error=>{}
      );
      /*
      this.course = this.createdCourses[Math.abs(this.index)-1];
      console.log("checkup",this.createdCourses);
      
      console.log(Math.abs(this.index)-1);
      */
    }
    console.log("checkup11",this.createdCourses);
    
    
    //this.coursesService.fetchEnrolledCourses();
  }
  vi(video,less){
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(video);
    this.less=less;
  }
  create(assign){
    this.createdCourses=assign
    console.log("checkup2",this.createdCourses);
    this.course = this.createdCourses[Math.abs(this.index)-1];
    console.log("checkup3",this.course);
    this.lessons = this.course['lessons'];
    this.video = this.lessons[0].video;
    this.less=this.lessons[0].lesson;
    this.vi(this.video,this.less);
    console.log(this.course)
  }
  create2(){
    this.lessons = this.course['lessons'];
    this.video = this.lessons[0].video;
    this.less=this.lessons[0].lesson;
    this.vi(this.video,this.less);
    console.log(this.course)
  }

}
