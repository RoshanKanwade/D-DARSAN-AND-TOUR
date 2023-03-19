package com.app.service;

import java.text.ParseException;
import java.util.List;

import org.springframework.stereotype.Service;

import com.app.dto.BookingDto;
import com.app.pojos.BookingDetails;


public interface BookingService {
public void Book(BookingDto dto) throws ParseException; 
	public List<BookingDetails> getById(Long userId ); 
}
