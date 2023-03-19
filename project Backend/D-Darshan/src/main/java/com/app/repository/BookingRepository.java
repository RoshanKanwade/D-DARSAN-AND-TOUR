package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.pojos.BookingDetails;
import com.app.pojos.RegistrationDetail;

@Repository
public interface BookingRepository extends JpaRepository<BookingDetails, Long>{
	public  BookingDetails  save(BookingDetails bookingDetails);
	
}
