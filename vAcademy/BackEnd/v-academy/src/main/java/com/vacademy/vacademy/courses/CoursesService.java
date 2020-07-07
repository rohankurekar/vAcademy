package com.vacademy.vacademy.courses;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vacademy.vacademy.authentication.AuthenticationServices;
import com.vacademy.vacademy.authentication.Users;
import com.vacademy.vacademy.dbModels.Courses;

import aj.org.objectweb.asm.Type;

import java.util.*;


@Service
public class CoursesService {
	
	public CoursesService() {}
	
	static List<Courses> allCourses;
	static Long id=0L;
	static 
	{
		allCourses=new ArrayList<Courses>();
		String imageUrl="https://code.org/shared/images/social-media/codeorg2019_social.png";
		allCourses.add(new Courses("Math","5",imageUrl,100L));
		allCourses.add(new Courses("FPL","5",imageUrl,100L));
		allCourses.add(new Courses("Web Technology","5",imageUrl,100L));
		allCourses.add(new Courses("Java in 20 days","5",imageUrl,100L));
	}
	
	@Autowired
	static AuthenticationServices authenticationService;
	
	public List<Courses> getAllCourses()
	{
		return allCourses;
	}
	
//	public static List<Courses> enroll(Long id,Courses course)
//	{
//		System.out.println("IN ENROLL SERVICE "+id+" ");
//		
//		Users user=authenticationService.findUserById(id);
//		System.out.println("IN ENROLL SERVICE "+user);
//		List<Courses>enrolledCourses=user.getEnrolledCourses();
//		enrolledCourses.add(course);
//		user.setEnrolledCourses(enrolledCourses); 
//		System.out.println(enrolledCourses);
//		return user.getEnrolledCourses();
//		
//	}
}
