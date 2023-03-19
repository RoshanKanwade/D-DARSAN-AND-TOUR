package com.app.dto;

import java.sql.Blob;

import javax.persistence.Column;

import org.springframework.web.multipart.MultipartFile;

public class RoomDetailDto {

	 private String image;
		
		 private String prize;
		
			 private String roomAvailaibilty;
			 private String dining;

			public String getDining() {
				return dining;
			}

			public void setDining(String dining) {
				this.dining = dining;
			}

			public String getImage() {
				return image;
			}

			public String getPrize() {
				return prize;
			}

			public String getRoomAvailaibilty() {
				return roomAvailaibilty;
			}

			public RoomDetailDto(String image, String prize, String roomAvailaibilty) {
				super();
				this.image = image;
				this.prize = prize;
				this.roomAvailaibilty = roomAvailaibilty;
			}

			public RoomDetailDto() {
				super();
				// TODO Auto-generated constructor stub
			}

			

			
		

		

		
	
}
