package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.pojos.HotelDetails;
import com.app.pojos.RegistrationDetail;
import com.app.pojos.RoomDetail;

@Repository
public interface RoomRepository extends JpaRepository<RoomDetail, Long> {
@Query("select r from RoomDetail r where hotelId=?1")
	List<RoomDetail> findAllByHotelId(Long hotelId);

public  RoomDetail  save(RoomDetail room);
}
