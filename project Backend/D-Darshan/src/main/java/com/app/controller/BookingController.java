package com.app.controller;

import java.text.ParseException;
import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.BookingDto;
import com.app.pojos.BookingDetails;
import com.app.service.BookingService;

@RestController

public class BookingController {
	@Autowired
	private BookingService bookingService;
	
	
	@PreAuthorize("permitAll()")
	@CrossOrigin(origins = "*")
	@GetMapping("/booking")
	public String BookingHotel( @RequestParam String checkInDate,
			@RequestParam String checkOutDate,
			@RequestParam int Noroom,
			@RequestParam int hotelId,
			@RequestParam int RoomId,
			@RequestParam String cardNumber,
			@RequestParam String  cardHolderName,
			@RequestParam double amount,
			@RequestParam double userId) throws ParseException {
		System.out.println(checkInDate);
		if(RoomId>0 && cardNumber==null && amount>0 ) {
			return "invalid Booking Details";
		}
		BookingDto dto=new BookingDto(checkInDate, checkOutDate, Noroom, hotelId, RoomId, cardNumber, cardHolderName, amount,userId);
		
		bookingService.Book(dto);
		return "Payment Succsecfully Done";
	}

	@PreAuthorize("permitAll()")
	@CrossOrigin(origins = "*")
	@GetMapping("/get/bookingdata")
	public List<BookingDetails> Bookingdata(@RequestParam double userId) {
		return bookingService.getById((long) userId);
		
	}
	

}