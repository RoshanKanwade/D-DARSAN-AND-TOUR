package com.app.dto;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

public class AddRoomDto {
    private MultipartFile image;
    private Double price;
    private Integer roomAvailability;
    private List<String> facilities;
    private String diningDescription;

    public AddRoomDto() {}
    

    public AddRoomDto(MultipartFile image, Double price, Integer roomAvailability, List<String> facilities,
			String diningDescription) {
		super();
		this.image = image;
		this.price = price;
		this.roomAvailability = roomAvailability;
		this.facilities = facilities;
		this.diningDescription = diningDescription;
	}


	public MultipartFile getImage() {
        return image;
    }

    public void setImage(MultipartFile image) {
        this.image = image;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getRoomAvailability() {
        return roomAvailability;
    }

    public void setRoomAvailability(Integer roomAvailability) {
        this.roomAvailability = roomAvailability;
    }

    public List<String> getFacilities() {
        return facilities;
    }

    public void setFacilities(List<String> facilities) {
        this.facilities = facilities;
    }

    public String getDiningDescription() {
        return diningDescription;
    }

    public void setDiningDescription(String diningDescription) {
        this.diningDescription = diningDescription;
    }
}

