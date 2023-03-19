package com.app.dto;

import javax.persistence.Column;


public class HotelregistrationDetails {
	private String firstName;
	private String lastName;
	private String email;
	private String hotelName;
	
	private String mobileNo;
	private String licenseNo;
	private String password;
	
	public HotelregistrationDetails(String firstName, String lastName, String email, String hotelName, String mobileNo,
			String licenseNo, String password) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.hotelName = hotelName;
		this.mobileNo = mobileNo;
		this.licenseNo = licenseNo;
		this.password = password;
	}

	public String getHotelName() {
		return hotelName;
	}

	public void setHotelName(String hotelName) {
		this.hotelName = hotelName;
	}
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
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
	public String getMobileNo() {
		return mobileNo;
	}
	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}
	public String getLicenseNo() {
		return licenseNo;
	}
	public void setLicenseNo(String licenseNo) {
		this.licenseNo = licenseNo;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public HotelregistrationDetails() {
		super();
	}
	
}
