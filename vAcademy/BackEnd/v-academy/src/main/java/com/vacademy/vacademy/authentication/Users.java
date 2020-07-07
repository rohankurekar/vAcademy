package com.vacademy.vacademy.authentication;
import com.vacademy.vacademy.dbModels.Courses;
import java.util.*;
public class Users {
	private Long id;
	private String firstName;
	private String lastName;
	private String email;
	private String mobileNumber;
	private String password;
	private boolean admin;
	private List<Courses>enrolledCourses;
	
	public Users() {}
	public Users(Long id, String firstName, String lastName, String email, String mobileNumber, String password,
			boolean isAdmin,List<Courses>enrolledCourses) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.mobileNumber = mobileNumber;
		this.password = password;
		this.admin = isAdmin;
		this.enrolledCourses=enrolledCourses;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public boolean isAdmin() {
		return admin;
	}
	public void setAdmin(boolean isAdmin) {
		this.admin = isAdmin;
		
	}
	public List<Courses> getEnrolledCourses() {
		return enrolledCourses;
	}
	public void setEnrolledCourses(List<Courses> enrolledCourses) {
		this.enrolledCourses = enrolledCourses;
	}
	@Override
	public String toString() {
		return "Users [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
				+ ", mobileNumber=" + mobileNumber + ", password=" + password + ", admin=" + admin
				+ ", enrolledCourses=" + enrolledCourses + "]";
	}
	
	
	

}
