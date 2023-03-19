package com.app.service;

import java.io.IOException;
import java.util.List;

import com.app.dto.HotelDetailDto;
import com.app.dto.RoomDetailDto;
import com.app.pojos.RoomDetail;

public interface HomePageService {
	public  byte[] sampleImage() throws IOException;
	
	public List<HotelDetailDto> getHotelByTemplName(int templeId);

	public void addRoomDetail(RoomDetailDto roomdetail) throws IOException;
	public List<RoomDetail> getRoomDetails(Long hotelId);
}
