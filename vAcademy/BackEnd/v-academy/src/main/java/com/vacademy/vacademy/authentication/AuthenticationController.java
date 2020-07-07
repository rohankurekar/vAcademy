package com.vacademy.vacademy.authentication;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;



// Manage All authentication requests from front end
@RestController
@CrossOrigin(origins= {"http://localhost:4200"})
public class AuthenticationController 
{
	@Autowired
	private AuthenticationServices authenticationService; 
	
	//Retrieve all users
	@GetMapping("/users/getall")
	public List<Users> getAllUsers()
	{
		return authenticationService.getAllUsers();
	}
	
	@GetMapping("/users/all/{id}")
	public Users getUserById(@PathVariable Long id)
	{
		Users user=authenticationService.findUserById(id);
		System.out.println(id+" In getUser");
		if(user!=null)
		{
			return user;
		}
		else
		{
			throw new RuntimeException("User Does Not Exist");
		}
	}
	
	//Login
	@GetMapping("/users/login/{email}/{password}/{isAdmin}")
	public Users loginUser(@PathVariable String email, @PathVariable String password,@PathVariable boolean isAdmin)
	{
		System.out.println("IN LOGIN");
		Users user=authenticationService.authenticateUser(email,password,isAdmin);
		if(user!=null)
		{
			return user;
		}
		else
		{
			throw new RuntimeException("User Does Not Exist");
		}
	}
	
	//For signup
	@PostMapping("/users/all") 
	public ResponseEntity<Void>addUser(@RequestBody Users userData) 
	{
		System.out.println("In signup "+userData); 
		Users new_User= authenticationService.save(userData);
		
		//In this we will return the Url for new tody by appending the id to the user: "/users/{username}/todos"+"/"+id
		URI uri=ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(new_User.getId()).toUri(); // you have to build uri like this
		
		
		return ResponseEntity.created(uri).build();
	}
 
}
