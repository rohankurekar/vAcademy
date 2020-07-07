import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { User } from '../auth/user.model';
import { Course } from '../shared/course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

	availableCourses: Course[];
	enrolledCourses: Course[];
	constructor(private http: HttpClient) { }

	fetchCourses()
	{
		return this.http.get<Course>(`http://localhost:8080/courses/allcourses`);
	}

	getAvailableCourses()
	{
		return this.availableCourses;
	}

	setAvailableCourses(availableCourses)
	{
		this.availableCourses = availableCourses;
	}

	fetchEnrolledCourses(){
		//return this.http.get<Course>(`http://localhost:8080/courses/allcourses`);
		this.enrolledCourses = [
			{
				name: "OS",
				duration: "3",
				imageUrl: "https://code.org/shared/images/social-media/codeorg2019_social.png",
				price: 700
			  },
			  {
				name: "DBMS",
				duration: "3",
				imageUrl: "https://code.org/shared/images/social-media/codeorg2019_social.png",
				price: 700
			  }
		]
	}

	getAvailableCourse(index: number){
		return this.availableCourses[index];
	}

	getEnrolledCourses(){
		return this.enrolledCourses;
	}

	getEnrolledCourse(index: number){
		return this.enrolledCourses[index];
	}

	addAvailableCourse(course: Course){
		this.availableCourses.push(course);
		//Create API
		//Server Push 
	}

	//Saving the enrolled course to db
	EnrolleToTheCourse(userId,course:Course)
	{
		return this.http.put(`http://localhost:8080/courses/enroll/tocourse/${userId}`,course)
	}

}
