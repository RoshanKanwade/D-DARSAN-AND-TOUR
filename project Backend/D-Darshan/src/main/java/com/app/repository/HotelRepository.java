package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.pojos.HotelDetails;
import com.app.pojos.RegistrationDetail;


@Repository
 
public interface HotelRepository extends JpaRepository<HotelDetails, Long> {
	@Query("SELECT h FROM HotelDetails h  JOIN  h.templeDetail t WHERE t.templeId=?1 ")
	 public List<HotelDetails> getHotelBytempleName(int templeId);
	
	
}
