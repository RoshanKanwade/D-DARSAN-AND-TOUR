package com.app.controller;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.dto.AddRoomDto;
import com.app.dto.AuthRequest;
import com.app.dto.HotelDetailDto;
import com.app.dto.RoomDetailDto;
import com.app.dto.TempleDetailsDto;
import com.app.pojos.RegistrationDetail;
import com.app.pojos.RoomDetail;
import com.app.pojos.TempleDetails;
import com.app.service.HomePageService;
import com.app.utils.FileUploadUtil;



@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class HomeController {
	@Autowired
	private HomePageService service;
	@GetMapping("/home/sampledata")
    public List<TempleDetailsDto> GetSampleData() throws IOException {
		 
	 List<TempleDetailsDto> list=new ArrayList<TempleDetailsDto>();
	 list.add(new TempleDetailsDto(service.sampleImage()));
        return list;
    }
	@PostMapping("/login")
	public String login() {
		
		return "welcome";
	}
	@GetMapping("/home/search/hotel")
	public List<HotelDetailDto> searchHotel(@RequestParam int templeId) {
		return service.getHotelByTemplName(templeId);
	}
	
	
	@PostMapping(path = "/added", consumes = "application/x-www-form-urlencoded")
	public void addRoom( RoomDetailDto roomdetail) throws IOException {
		System.out.println(roomdetail.getImage());
		
	
	    
	}
	@PreAuthorize("permitAll()")
	@GetMapping(value = "/get/addRoom")
	public String addRoom(@RequestBody MultipartFile image
			) {
	 
		System.out.println(image.getOriginalFilename()+" ");

	    if (image == null) {
	        return "Invalid parameters";
	    }

	    // save image to the uploads folder
	    try {String folder="image";
	    	
	    	File path = new File(folder);
			if (!path.exists()) {
				path.mkdirs();
			} else
				System.out.println("folder alrdy exists....");
			String targetPath=folder+File.separator+image.getOriginalFilename();
			
			System.out.println(targetPath);
			//copy image file contents to the specified path
			Files.copy(image.getInputStream(), Paths.get(targetPath), StandardCopyOption.REPLACE_EXISTING);
	    } catch (IOException e) {
	        e.printStackTrace();
	        return "Error uploading image";
	    }

	    return "Room added successfully";
	}
	
	@PreAuthorize("permitAll()")
	@GetMapping("/get/hotel")
	public ResponseEntity<?> getHotelDetails(@RequestParam String id) throws IOException {
		System.out.println(id);
		return null;
}
}