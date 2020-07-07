package com.vacademy.vacademy.courses;

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
	@GetMapping("/courses/enrolledcourses/{userId}")
	public List<Courses> getEnrolledCourses(@PathVariable Long userId)
	{
		return coursesService.getAllCourses();
	} 
	
	//Add to Enrolled Courses
	@PutMapping("/courses/enroll/tocourse/{userId}")
	public ResponseEntity<List<Courses>> enroll(@PathVariable Long userId,@RequestBody Courses course) 
	{
		System.out.println("IN ENROLL");
		List<Courses> added_Course= authenticationService.enroll(userId,course);
		return new ResponseEntity<List<Courses>>(added_Course,HttpStatus.OK);
	}
 
}
