package com.app.pojos;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.OneToOne;

@Entity
public class RegistrationDetail {
@Id
@Column(name = "unique_id")
@GeneratedValue(strategy = GenerationType.AUTO)
private long uniqueId;
private String email ;
@Column(name = "moblie_no")
private String mobileNo;
private String password;
private String role;
@OneToOne( cascade =CascadeType.ALL,mappedBy = "registration" ,fetch = FetchType.LAZY )
private User user;
@OneToOne( cascade =CascadeType.ALL,mappedBy = "registrationDetail" ,fetch = FetchType.LAZY )
private HotelDetails hotelOwner;

public RegistrationDetail() {
	super();
}
public RegistrationDetail(long uniqueId, String email, String mobileNo, String password, String role) {
	super();
	this.uniqueId = uniqueId;
	this.email = email;
	this.mobileNo = mobileNo;
	this.password = password;
	this.role = role;
}
public User getUser() {
	return user;
}
public void setUser(User user) {
	this.user = user;
}

public HotelDetails getHotelOwner() {
	return hotelOwner;
}
public void setHotelOwner(HotelDetails hotelOwner) {
	this.hotelOwner = hotelOwner;
}
public long getUniqueId() {
	return uniqueId;
}
public void setUniqueId(long uniqueId) {
	this.uniqueId = uniqueId;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getMobileNo() {
	return mobileNo;
}
public void setMobileNo(String mobileNo) {
	this.mobileNo = mobileNo;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
public String getRole() {
	return role;
}
public void setRole(String role) {
	this.role = role;
}
@Override
public String toString() {
	return "RegistrationDetail [uniqueId=" + uniqueId + ", email=" + email + ", mobileNo=" + mobileNo + ", password="
			+ password + ", role=" + role + "]";
}

}
