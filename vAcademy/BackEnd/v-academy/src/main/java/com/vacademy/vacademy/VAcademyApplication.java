package com.vacademy.vacademy;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.SpringVersion;

@SpringBootApplication
public class VAcademyApplication {

	public static void main(String[] args) {
		 System.out.println("version: " + SpringVersion.getVersion());
		SpringApplication.run(VAcademyApplication.class, args);
	}

}
