package com.app.pojos;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
@Entity
public class TempleDetails {
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
@Column(name = "temple_id")
private long templeId;
@Column(name = "address")
private String Address;
@Column(name = "state")
private String state;
@Column(name = "district")
private String district;
@Column(name = "pincode")
private double pincod;
@Column(name = "image")
private String image;


@ManyToMany(mappedBy = "templeDetail")
private Set<HotelDetails> hotelDetails= new HashSet<HotelDetails>();

public Set<HotelDetails> getHotelDetails() {
	return hotelDetails;
}
public void setHotelDetails(Set<HotelDetails> hotelDetails) {
	this.hotelDetails = hotelDetails;
}
@Override
public String toString() {
	return "TempleDetails [templeId=" + templeId + ", Address=" + Address + ", state=" + state + ", district="
			+ district + ", pincod=" + pincod + ", image=" + image + "]";
}
public long getTempleId() {
	return templeId;
}
public void setTempleId(long templeId) {
	this.templeId = templeId;
}
public String getAddress() {
	return Address;
}
public void setAddress(String address) {
	Address = address;
}
public String getState() {
	return state;
}
public void setState(String state) {
	this.state = state;
}
public String getDistrict() {
	return district;
}
public void setDistrict(String district) {
	this.district = district;
}
public double getPincod() {
	return pincod;
}
public void setPincod(double pincod) {
	this.pincod = pincod;
}
public String getImage() {
	return image;
}
public void setImage(String image) {
	this.image = image;
}
public TempleDetails(long templeId, String address, String state, String district, double pincod, String image) {
	super();
	this.templeId = templeId;
	Address = address;
	this.state = state;
	this.district = district;
	this.pincod = pincod;
	this.image = image;
}





}