package com.vacademy.vacademy;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class demoController {
	
	@RequestMapping("/hello")
	public String hello()
	{
		return "Welcome to V-Academy";
	}

}
