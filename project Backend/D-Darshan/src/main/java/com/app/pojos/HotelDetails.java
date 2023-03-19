package com.app.pojos;


import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;
@Component
@Entity
public class HotelDetails {
	@Id
	@Column(name = "hotel_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long hotelId;
	@Column(name="first_name")
	private String firstName;
	@Column(name="last_name")
	private String lastName;
	@Column(name="mobile_no")
	private String mobileNo;
	@Column(name="hotel_name")
	private String hotelName;
	public String getHotelName() {
		return hotelName;
	}

	public void setHotelName(String hotelName) {
		this.hotelName = hotelName;
	}


	@Column(name="address")
	private String address;
	public HotelDetails(Long hotelId, String firstName, String lastName, String mobileNo, String hotelName,
			String address, String licenseNo) {
		super();
		this.hotelId = hotelId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.mobileNo = mobileNo;
		this.hotelName = hotelName;
		this.address = address;
		this.licenseNo = licenseNo;
	}


	@Column(name="license_no")
	private String licenseNo;
	@OneToOne (fetch = FetchType.LAZY)
	@JoinColumn(name="unique_id")
	private RegistrationDetail registrationDetail;
	 @ManyToMany(fetch =FetchType.LAZY, cascade =CascadeType.ALL)
	    @JoinTable(name = "hotel_temple_relation",
	            joinColumns = { @JoinColumn(name = "hotel_id") },
	            inverseJoinColumns = { @JoinColumn(name = "temple_id") })
	    private Set<TempleDetails> templeDetail = new HashSet<>();
	 
	  @OneToMany(mappedBy = "hotelDetail", cascade =CascadeType.ALL)
	    private List<RoomDetail> roomDetails = new ArrayList<>();
	public List<RoomDetail> getRoomDetails() {
		return roomDetails;
	}

	public void setRoomDetails(List<RoomDetail> roomDetails) {
		this.roomDetails = roomDetails;
	}

	public HotelDetails() {
		super();
	}

	public Set<TempleDetails> getTempleDetail() {
		return templeDetail;
	}

	public void setTempleDetail(Set<TempleDetails> templeDetail) {
		this.templeDetail = templeDetail;
	}

	public HotelDetails(String firstName, String lastName, String mobileNo, String hotelName, String licenseNo) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.mobileNo = mobileNo;
		this.licenseNo = licenseNo;
		this.hotelName = hotelName;
	}

	
	@Override
	public String toString() {
		return "HotelDetails [hotelId=" + hotelId + ", firstName=" + firstName + ", lastName=" + lastName
				+ ", mobileNo=" + mobileNo + ", address=" + address + ", licenseNo=" + licenseNo + "]";
	}
	
	public Long getHotelId() {
		return hotelId;
	}
	public void setHotelId(Long hotelId) {
		this.hotelId = hotelId;
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

	

	public RegistrationDetail getRegistrationDetail() {
		return registrationDetail;
	}

	public void setRegistrationDetail(RegistrationDetail registrationDetail) {
		this.registrationDetail = registrationDetail;
	}

	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getLicenseNo() {
		return licenseNo;
	}
	public void setLicenseNo(String licenseNo) {
		this.licenseNo = licenseNo;
	}
	
	
	public void setRoom(RoomDetail detail){
		this.roomDetails.add(detail);
		detail.setHotelDetail(this);
	}
	
	
	
	 
	 
	

}