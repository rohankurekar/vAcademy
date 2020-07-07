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
  constructor(private fb: FormBuilder,
              private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.myForm=this.fb.group({
      coursename:'',
      description:'',
      price:'',
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
    //console.log(this.myForm);
    const name = this.myForm.value.coursename;
    const price = this.myForm.value.price;
    const imageUrl = 'https://code.org/shared/images/social-media/codeorg2019_social.png';
    const duration = '5';

    const course = new Course(name,duration,imageUrl,+price);
    this.coursesService.addAvailableCourse(course);
    //Update Backend (PUT API)
  }
}
