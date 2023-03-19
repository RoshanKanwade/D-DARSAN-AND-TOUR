package com.app.service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters.LocalDateTimeConverter;
import org.springframework.stereotype.Service;

import com.app.dto.BookingDto;
import com.app.pojos.BookingDetails;
import com.app.pojos.PaymentDetail;
import com.app.pojos.RoomDetail;
import com.app.pojos.User;
import com.app.repository.BookingRepository;
import com.app.repository.HotelRepository;
import com.app.repository.PaymentRepo;
@Service 
@Transactional
public class BookigServiceImpl implements BookingService {
@Autowired
BookingRepository bookingRepo;
	@Autowired
private	PaymentRepo payRepo;
	@Override
	public void Book(BookingDto dto) throws ParseException {
		 SimpleDateFormat dateFormat1 = new SimpleDateFormat("EEE MMM dd yyyy HH:mm:ss 'GMT'Z (z)");
		 SimpleDateFormat dateFormat2 = new SimpleDateFormat("EEE MMM dd yyyy HH:mm:ss 'GMT'Z (z)");
	        Date date = null;
	        Date date1 = null;
	        System.out.println("jjdfsh");
	      date = dateFormat1.parse(dto.getCheckInDate());
	      System.out.println("jjdfsh");
	      date1 = dateFormat1.parse( dto.getCheckInDate());
	BookingDetails bookingDetail=new BookingDetails((long) 0,date,date1,"Booked");
	System.out.println("jjdfsh");
	User user=new User();
	user.setId((long) dto.getUserId());
		bookingDetail.setUser(user);
		System.out.println("jjdfsh");
	RoomDetail room=new RoomDetail();
	room.setRoomId1(dto.getRoomId());
	Set<RoomDetail> roomlist=new HashSet(2);
	roomlist.add(room);
	PaymentDetail payment= payRepo.save(new PaymentDetail((long) 1, dto.getAmount(), dto.getCardHolderName()));
		bookingDetail.setRoomDetails(roomlist);
		
		bookingDetail.setPaymentDetail(payment);
		
		System.out.println("jjdfsh");
		bookingRepo.save(bookingDetail);
	
	}
	@Override
	public List<BookingDetails> getById(Long userId) {
		
		
			return null;
		
	}
	

	

}
