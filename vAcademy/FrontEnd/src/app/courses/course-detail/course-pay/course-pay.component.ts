import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/shared/course.model';
import { CoursesService } from 'src/app/services/courses.service';
import { User } from 'src/app/auth/user.model';
import { MycoursesComponent } from '../../mycourses/mycourses.component';

declare var paypal;

@Component({
  selector: 'app-course-pay',
  templateUrl: './course-pay.component.html',
  styleUrls: ['./course-pay.component.css']
})
export class CoursePayComponent implements OnInit {
  index: number;
  course: Course;
  user:User;
  @ViewChild('paypal', { static: true }) paypalElement: ElementRef;
  constructor(private route: ActivatedRoute,
              private coursesService: CoursesService,
              private router:Router) { }

  paidFor = false;
  ngOnInit() {
    this.index = this.route.snapshot.params['id'];
    this.course = this.coursesService.getAvailableCourse(this.index); 
    paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: this.course.name,
                amount: {
                  currency_code: 'USD',
                  value: this.course.price
                }
              }
            ]
          });
        },
        onApprove: async (data, actions) => {

          //Payment Approved
          //Create API Call
          const order = await actions.order.capture();
          this.paidFor = true;
          //console.log("TO BE ADDED: ",this.course)
          this.addToMyCourses(this.course)
          console.log(order);
        },
        onError: err => {
          
          console.log(err);
        }
      })
      .render(this.paypalElement.nativeElement);
  }

  addToMyCourses(course)
  {
    let userData=JSON.parse(localStorage.getItem('userData'))
    let userId=userData['id']
    this.coursesService.EnrolleToTheCourse(userId,course).subscribe(
      
        response=>{
          //console.log("added:",response)
          this.user=userData
          this.user.enrolledCourses=response;
          localStorage.setItem('userData',JSON.stringify(this.user))
          //console.log(this.user)
          this.router.navigate(['courses/my'])
        },
        error=>{}
      
    )
    
  }

}
