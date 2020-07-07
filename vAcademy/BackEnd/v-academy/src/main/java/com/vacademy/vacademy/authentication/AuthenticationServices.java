package com.vacademy.vacademy.authentication;
import java.util.*;
import org.springframework.stereotype.Service;

import com.vacademy.vacademy.dbModels.Courses;

//Contains all the reuired services for login/signup
@Service
public class AuthenticationServices {
	
	private static List<Users>allUsers;
	private static List<Courses>enrolledCourses;
	private static Long id=0L;
	
	public AuthenticationServices() {}
	
	static
	{ 
		allUsers=new ArrayList<Users>();
		enrolledCourses=new ArrayList<Courses>();
		String imageUrl="https://code.org/shared/images/social-media/codeorg2019_social.png";
		allUsers.add(new Users(++id,"Dhanesh","Walte","d@g.com","12345","12345",false,enrolledCourses));
		allUsers.add(new Users(++id,"Mohit","Gupta","m@g.com","12345","12345",false,enrolledCourses));
		allUsers.add(new Users(++id,"Rohan","Kurekar","r@g.com","12345","12345",false,enrolledCourses));
	}
	
	public static List<Users> getAllUsers() {
		return allUsers;
	}

	public static void setAllUsers(List<Users> allUsers) {
		AuthenticationServices.allUsers = allUsers;
	}

	public static Long getId() {
		return id;
	}

	public static void setId(Long id) {
		AuthenticationServices.id = id;
	}
	
	public Users authenticateUser(String email,String password,boolean isAdmin)
	{
		if(isAdmin==true) //check in Admin table
		{
			return null;
		}
		else //check in students table
		{
			for (Users user : allUsers) 
			{
				if(user.getEmail().equals(email) && user.getPassword().equals(password))
				{
					System.out.println(user.getMobileNumber());
					return user;
				}
				
			}
			return null;
		}
		
	}
	
	//For updating and adding users
	
	public Users save(Users userInfo)
	{
		if(userInfo.getId()==-1 || userInfo.getId()==0) //Signup user
		{
			userInfo.setId(++id);
			allUsers.add(userInfo);
			
			
		}
		else //update user
		{
			
		}
		return userInfo;
	}
	
	public Users findUserById(Long id)
	{
		for (Users users : allUsers) {
			
			if(users.getId()==id)
			{
				return users;
			}
			
		}
		return null;
	}
	
	public  List<Courses> enroll(Long id,Courses course)
	{
		//System.out.println("IN ENROLL SERVICE "+id+" ");
		
		Users user=findUserById(id);
		//System.out.println("IN ENROLL SERVICE "+user);
		List<Courses>enrolledCourses=user.getEnrolledCourses();
		enrolledCourses.add(course);
		user.setEnrolledCourses(enrolledCourses); 
		//System.out.println(enrolledCourses);
		return user.getEnrolledCourses();
		
	}

}
