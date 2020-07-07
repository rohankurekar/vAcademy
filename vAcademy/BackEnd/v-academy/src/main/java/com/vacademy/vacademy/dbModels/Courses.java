package com.vacademy.vacademy.dbModels;
import java.util.*;
public class Courses {
	
	private Long id;
	private String name;
	private String duration;
	private String imageUrl;
	private Long price;
	private List<String> lessons;
	
	public Courses() {}

	public Courses(String name, String duration, String imageUrl, Long price) {
		super();
		this.name = name;
		this.duration = duration;
		this.imageUrl = imageUrl;
		this.price = price;
		
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDuration() {
		return duration;
	}

	public void setDuration(String duration) {
		this.duration = duration;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public Long getPrice() {
		return price;
	}

	public void setPrice(Long price) {
		this.price = price;
	}

	public List<String> getLessons() {
		return lessons;
	}

	public void setLessons(List<String> lessons) {
		this.lessons = lessons;
	}
	
	
	

}
