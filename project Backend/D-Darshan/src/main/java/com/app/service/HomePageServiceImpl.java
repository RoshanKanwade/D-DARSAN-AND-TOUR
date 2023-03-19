package com.app.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;


import com.app.dto.HotelDetailDto;
import com.app.dto.RoomDetailDto;
import com.app.pojos.HotelDetails;
import com.app.pojos.RegistrationDetail;
import com.app.pojos.RoomDetail;
import com.app.pojos.TempleDetails;
import com.app.repository.HotelRepository;
import com.app.repository.RoomRepository;
import com.app.repository.TempleRepository;
import com.app.utils.FileUploadUtil;

@Service 
@Transactional
public class HomePageServiceImpl implements HomePageService {

@Autowired
private HotelRepository hotelRepo;
@Autowired
private RoomRepository roomRepo;


public byte[] sampleImage() throws IOException {
		String image="hotel1.jpg";
		return Files.readAllBytes(Paths.get("C:\\Users\\prash\\Downloads\\"+image));

	}

	@Override
	public List<HotelDetailDto> getHotelByTemplName(int templeId) {
	List<HotelDetails> hotelDetail=hotelRepo.getHotelBytempleName(templeId);
	List<List<RoomDetail>> roomDetail=new ArrayList<List<RoomDetail>>();
	for (HotelDetails hotelDetails : hotelDetail) {
		roomDetail.add(roomRepo.findAllByHotelId(hotelDetails.getHotelId()));	
	}
		return null;
	}

	@Override
	public void addRoomDetail(RoomDetailDto roomdetail) throws IOException {
		
	    
	 
	}
	 

	@Override
	public List<RoomDetail> getRoomDetails(Long hotelId) {
		
	List<RoomDetail> roomDetails= roomRepo.findAllByHotelId(hotelId);
		return roomDetails;
	}
    
	
	
}
