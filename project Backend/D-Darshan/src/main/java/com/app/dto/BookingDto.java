package com.app.dto;

import org.springframework.web.bind.annotation.RequestParam;

public class BookingDto {
	private String checkInDate;
	private String checkOutDate;
	private int Noroom;
	private int hotelId;
	private int RoomId;
	private String cardNumber;
	private String  cardHolderName;
	private double amount;
	private double userId;
	public double getUserId() {
		return userId;
	}
	public void setUserId(double userId) {
		this.userId = userId;
	}
	public BookingDto(String checkInDate, String checkOutDate, int noroom, int hotelId, int roomId, String cardNumber,
			String cardHolderName, double amount, double userId) {
		super();
		this.checkInDate = checkInDate;
		this.checkOutDate = checkOutDate;
		Noroom = noroom;
		this.hotelId = hotelId;
		RoomId = roomId;
		this.cardNumber = cardNumber;
		this.cardHolderName = cardHolderName;
		this.amount = amount;
		this.userId = userId;
	}
	public String getCheckInDate() {
		return checkInDate;
	}
	public void setCheckInDate(String checkInDate) {
		this.checkInDate = checkInDate;
	}
	public String getCheckOutDate() {
		return checkOutDate;
	}
	public void setCheckOutDate(String checkOutDate) {
		this.checkOutDate = checkOutDate;
	}
	public int getNoroom() {
		return Noroom;
	}
	public void setNoroom(int noroom) {
		Noroom = noroom;
	}
	public int getHotelId() {
		return hotelId;
	}
	public void setHotelId(int hotelId) {
		this.hotelId = hotelId;
	}
	public int getRoomId() {
		return RoomId;
	}
	public void setRoomId(int roomId) {
		RoomId = roomId;
	}
	public String getCardNumber() {
		return cardNumber;
	}
	public void setCardNumber(String cardNumber) {
		this.cardNumber = cardNumber;
	}
	public String getCardHolderName() {
		return cardHolderName;
	}
	public void setCardHolderName(String cardHolderName) {
		this.cardHolderName = cardHolderName;
	}
	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}
	public BookingDto(String checkInDate, String checkOutDate, int noroom, int hotelId, int roomId, String cardNumber,
			String cardHolderName, double amount) {
		super();
		this.checkInDate = checkInDate;
		this.checkOutDate = checkOutDate;
		Noroom = noroom;
		this.hotelId = hotelId;
		RoomId = roomId;
		this.cardNumber = cardNumber;
		this.cardHolderName = cardHolderName;
		this.amount = amount;
	}
	
}