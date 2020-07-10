package com.vacademy.vacademy.dbModels;
import java.util.*;
import java.time.LocalDate;
class lesson{
	private String lesson;
	private String image;
	private String video;
	
	public String getLesson() {
		return lesson;
	}
	public void setLesson(String lesson) {
		this.lesson = lesson;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getVideo() {
		return video;
	}
	public void setVideo(String video) {
		this.video = video;
	}
	@Override
	public String toString() {
		return "lesson [lesson=" + lesson + ", image=" + image + ", video=" + video + "]";
	}
	
	
	
	
	
}
public class Courses {
	
	private String id;
	private String name;
	private String duration;
	private String description;
	private Long price;
	private String imageurl;
	private List<lesson> lessons;
	
	public Courses() {}

	public Courses(String name, String duration, String description, Long price, String imageurl,
			List<lesson> lessons) {
		super();
		this.id = LocalDate.now().toString();
		this.name = name;
		this.duration = duration;
		this.description = description;
		this.price = price;
		this.imageurl = imageurl;
		this.lessons = lessons;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
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

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Long getPrice() {
		return price;
	}

	public void setPrice(Long price) {
		this.price = price;
	}

	public String getImageurl() {
		return imageurl;
	}

	public void setImageurl(String imageurl) {
		this.imageurl = imageurl;
	}

	public List<lesson> getLessons() {
		return lessons;
	}

	public void setLessons(List<lesson> lessons) {
		this.lessons = lessons;
	}

	@Override
	public String toString() {
		return "Courses [id=" + id + ", name=" + name + ", duration=" + duration + ", description=" + description
				+ ", price=" + price + ", imageurl=" + imageurl + ", lessons=" + lessons + "]";
	}

	
	

	
	
	

	

}
