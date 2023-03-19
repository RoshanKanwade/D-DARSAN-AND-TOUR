package com.app.pojos;


import java.time.LocalDate;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

@Entity
public class BookingDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="booking_id")
	 private Long bookingId;
	
	@Column(name="check_in_date")
	 private Date checkInDate;
	
	
	@Column(name="check_out_date")
	 private Date checkOutDate;
	
	@Column(name="booking_status")
	 private String bookingStatus;
	
     @OneToOne
	 private PaymentDetail paymentDetail;
     
     @ManyToMany(mappedBy = "bookingDetail")
     private Set<RoomDetail> roomDetails= new HashSet<RoomDetail>();

@ManyToOne
@JoinColumn(name = "user_id")
private User user;
	public User getUser() {
	return user;
}

public void setUser(User user) {
	this.user = user;
}

	public PaymentDetail getPaymentDetail() {
		return paymentDetail;
	}

	public void setPaymentDetail(PaymentDetail paymentDetail) {
		this.paymentDetail = paymentDetail;
	}

	public Set<RoomDetail> getRoomDetails() {
		return roomDetails;
	}

	public void setRoomDetails(Set<RoomDetail> roomlist) {
		this.roomDetails = roomlist;
	}

	public BookingDetails() {
		super();
	}

	public BookingDetails(Long i, Date checkInDate, Date checkOutDate, String bookingStatus) {
		super();
		this.bookingId = i;
		this.checkInDate = checkInDate;
		this.checkOutDate = checkOutDate;
		this.bookingStatus = bookingStatus;
	}

	
	@Override
	public String toString() {
		return "BookingDetails [bookingId=" + bookingId + ", checkInDate=" + checkInDate + ", checkOutDate="
				+ checkOutDate + ", bookingStatus=" + bookingStatus + "]";
	}

	public Long getBookingId() {
		return bookingId;
	}

	public void setBookingId(Long bookingId) {
		this.bookingId = bookingId;
	}

	public Date getCheckInDate() {
		return checkInDate;
	}

	public void setCheckInDate(Date checkInDate) {
		this.checkInDate = checkInDate;
	}

	public Date getCheckOutDate() {
		return checkOutDate;
	}

	public void setCheckOutDate(Date checkOutDate) {
		this.checkOutDate = checkOutDate;
	}

	public String getBookingStatus() {
		return bookingStatus;
	}

	public void setBookingStatus(String bookingStatus) {
		this.bookingStatus = bookingStatus;
	}
	
	
}
