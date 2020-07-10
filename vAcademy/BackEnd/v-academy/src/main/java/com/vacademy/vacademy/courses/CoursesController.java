package com.vacademy.vacademy.courses;
import java.time.LocalTime;
import java.time.LocalDate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.vacademy.vacademy.authentication.AuthenticationServices;
import com.vacademy.vacademy.dbModels.Courses;

import java.time.LocalDate;
import java.util.*;

@RestController
@CrossOrigin(origins= {"http://localhost:4200"})
public class CoursesController 
{
	@Autowired 
	CoursesService coursesService;
	
	@Autowired
	AuthenticationServices authenticationService;
	//Retrieve All Courses
	@GetMapping("/courses/allcourses")
	public List<Courses> getAllCourses()
	{
		return coursesService.getAllCourses();
	}
	
	//Retrieve my courses
	@GetMapping("/courses/enrolledco/{userId}")
	public List<Courses> getEnrolledCourses(@PathVariable Long userId)
	{   System.out.println("enrolled courses");
		return authenticationService.getcourses(userId);
	} 
	//Retrieve my courses
		@GetMapping("/courses/createdco/{userId}")
		public List<Courses> getCreatedCourses(@PathVariable Long userId)
		{   System.out.println("created courses");
			return authenticationService.getCreatedcourses(userId);
		} 
	
	//Add to Enrolled Courses
	@PutMapping("/courses/enroll/tocourse/{userId}")
	public ResponseEntity<List<Courses>> enroll(@PathVariable Long userId,@RequestBody Courses course) 
	{
		System.out.println("IN ENROLL");
		List<Courses> added_Course= authenticationService.enroll(userId,course);
		return new ResponseEntity<List<Courses>>(added_Course,HttpStatus.OK);
	}
	
	@PutMapping("/courses/create/tocourse/{userId}")
	public ResponseEntity<List<Courses>> create(@PathVariable Long userId,@RequestBody Courses course) 
	{
		System.out.println("IN Create");
		System.out.println(userId);
		System.out.println(course.toString());
		course.setId(LocalDate.now().toString()+LocalTime.now().toString());
		List<Courses> added_Course= authenticationService.create(userId,course);
		List<Courses> all_Course=new LinkedList<Courses>();
		if(coursesService.getAllCourses()==null) {
			all_Course.add(course);
		
		}else {
			all_Course=coursesService.getAllCourses();
			all_Course.add(course);
		}
		
		coursesService.setAllCourses(all_Course);
		
		return new ResponseEntity<List<Courses>>(added_Course,HttpStatus.OK);
	}
 
}
