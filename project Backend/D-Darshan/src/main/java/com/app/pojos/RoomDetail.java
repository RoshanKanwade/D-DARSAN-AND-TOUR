package com.app.pojos;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

@Entity
public class RoomDetail {
	@Id
	@Column(name="room_id")
	 private int roomId1;
	
	@Column(name="image")
	 private String image;
	
	@Column(name="prize")
	 private double prize;
	
	@Column(name="facility")
	 private String facility;
	
	@Column(name="dining")
	 private String dining;
	
	@Column(name="room_availaibilty")
	 private int roomAvailaibilty;

	
	 @ManyToOne
	    @JoinColumn(name = "hotel_id")
	    private HotelDetails hotelDetail;
	 @ManyToMany(fetch = FetchType.LAZY, cascade =CascadeType.ALL)
	    @JoinTable(name = "room_booking_relation",
	            joinColumns = { @JoinColumn(name = "room_id") },
	            inverseJoinColumns = { @JoinColumn(name = "booking_id") })
	    private Set<BookingDetails> bookingDetail = new HashSet<>();

	public HotelDetails getHotelDetail() {
		return hotelDetail;
	}

	public void setHotelDetail(HotelDetails hotelDetail) {
		this.hotelDetail = hotelDetail;
	}

	public RoomDetail(int roomId1, String image, double prize, String facility, String dining, int roomAvailaibilty) {
		super();
		this.roomId1 = roomId1;
		this.image = image;
		this.prize = prize;
		this.facility = facility;
		this.dining = dining;
		this.roomAvailaibilty = roomAvailaibilty;
	}

	public RoomDetail() {
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "RoomDetail [roomId1=" + roomId1 + ", image=" + image + ", prize=" + prize + ", facility=" + facility
				+ ", dining=" + dining + ", roomAvailaibilty=" + roomAvailaibilty + "]";
	}

	public int getRoomId1() {
		return roomId1;
	}

	public void setRoomId1(int roomId1) {
		this.roomId1 = roomId1;
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
	
	
	

}
