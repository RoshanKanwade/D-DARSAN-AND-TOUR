package com.app.dto;

import javax.persistence.Column;

public class HotelDetailDto {
	
	private String mobileNo;
    private String address;
	 private String image;
	 private double prize;
	 private String facility;
	 private String dining;
	 private String hotelName;
	 public String getHotelName() {
		return hotelName;
	}
	public void setHotelName(String hotelName) {
		this.hotelName = hotelName;
	}
	public HotelDetailDto(String mobileNo, String address, String image, double prize, String facility, String dining,
			String hotelName, int roomAvailaibilty) {
		super();
		this.mobileNo = mobileNo;
		this.address = address;
		this.image = image;
		this.prize = prize;
		this.facility = facility;
		this.dining = dining;
		this.hotelName = hotelName;
		this.roomAvailaibilty = roomAvailaibilty;
	}
	public String getMobileNo() {
		return mobileNo;
	}
	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public double getPrize() {
		return prize;
	}
	public void setPrize(double prize) {
		this.prize = prize;
	}
	public String getFacility() {
		return facility;
	}
	public void setFacility(String facility) {
		this.facility = facility;
	}
	public String getDining() {
		return dining;
	}
	public void setDining(String dining) {
		this.dining = dining;
	}
	public int getRoomAvailaibilty() {
		return roomAvailaibilty;
	}
	public void setRoomAvailaibilty(int roomAvailaibilty) {
		this.roomAvailaibilty = roomAvailaibilty;
	}
	public HotelDetailDto() {
		super();
	}
	public HotelDetailDto(String mobileNo, String address, String image, double prize, String facility, String dining,
			int roomAvailaibilty) {
		super();
		this.mobileNo = mobileNo;
		this.address = address;
		this.image = image;
		this.prize = prize;
		this.facility = facility;
		this.dining = dining;
		this.roomAvailaibilty = roomAvailaibilty;
	}
	private int roomAvailaibilty;
}
