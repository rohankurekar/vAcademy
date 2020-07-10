import { User } from './../../auth/user.model';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, FormArray} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { Course } from 'src/app/shared/course.model';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  myForm: FormGroup;
  user:User;
  constructor(private fb: FormBuilder,
              private coursesService: CoursesService,private router:Router) { }

  ngOnInit(): void {
    this.myForm=this.fb.group({
      name:'',
      duration:'',
      description:'',
      price:'',
      imageurl:'',
      lessons: this.fb.array([])
    })

  }
  get lessonForms(){
    return this.myForm.get('lessons') as FormArray
  }

  addLesson(){
    const lesson=this.fb.group({
      lesson:[],
      image:[],
      video:[]
      
    })

    this.lessonForms.push(lesson);
  }
  deleteLesson(i){
    this.lessonForms.removeAt(i);
  }

  onSubmit(){
    //console.log(this.myForm.value);
    /*
    const name = this.myForm.value.coursename;
    const duration = this.myForm.value.duration;
    const description = this.myForm.value.price;
    const price = this.myForm.value.price;
    const imageUrl = 'https://code.org/shared/images/social-media/codeorg2019_social.png';
    
    

    const course = new Course(name,duration,imageUrl,+price);
    */
   let userData=JSON.parse(localStorage.getItem('userData'))
    let userId=userData['id']
    console.log(userId);
    this.coursesService.createToTheCourse(userId,this.myForm.value).subscribe(
      
        response=>{
          console.log("added:",response)
          console.log("created:",this.myForm.value)
          this.user=userData
          //this.user.enrolledCourses=response;
          localStorage.setItem('userData',JSON.stringify(this.user))
          //console.log(this.user)
          this.router.navigate(['courses'])
        },
        error=>{}
      
    )
    //this.coursesService.addAvailableCourse(this.myForm.value);
    //Update Backend (PUT API)
    
  }
}
