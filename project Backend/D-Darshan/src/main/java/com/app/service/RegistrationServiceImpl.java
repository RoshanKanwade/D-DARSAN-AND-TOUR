package com.app.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.app.dto.HotelregistrationDetails;
import com.app.dto.RegisteredDto;
import com.app.exceptionhHandling.UsernameNotFoundException;
import com.app.pojos.HotelDetails;
import com.app.pojos.RegistrationDetail;
import com.app.pojos.User;
import com.app.repository.RegistrationRepository;
@Service 
@Transactional
public class RegistrationServiceImpl implements RegisterService{
@Autowired
private RegistrationRepository registerRepo;

@Autowired
private PasswordEncoder enc;
	@Override
	public boolean RegisterUser(RegisteredDto dto) {
		
		return false;
	}

	
	public RegistrationDetail findByMobileNo(RegisteredDto dto)  { 
		
		RegistrationDetail user = registerRepo.findBymobileNum(dto.getMobileNo());
		System.out.println(user);
		
	        
			 
			            
		return user;
	}

	@Override
	public void save(RegisteredDto dto) {
		System.out.println(""+enc.encode(dto.getPassword()));
		 RegistrationDetail  Registerdetail= new RegistrationDetail(0,dto.getEmail(),dto.getMobileNo(),enc.encode(dto.getPassword()), "User");
		User user= new User(dto.getUserName());
		Registerdetail.setUser(user);
		 user.setRegistration(Registerdetail);
		 
		 registerRepo.save(Registerdetail);
		
	}


	@Override
	public RegistrationDetail findOwnerByMobileNo(HotelregistrationDetails dto) {
		RegistrationDetail user = registerRepo.findBymobileNum(dto.getMobileNo());
		System.out.println(user);
		
	        
			 
			            
		return user;
	}


	@Override
	public void save(HotelregistrationDetails dto) {
		System.out.println(""+enc.encode(dto.getPassword()));
		 RegistrationDetail  Registerdetail= new RegistrationDetail(0,dto.getEmail(),dto.getMobileNo(),enc.encode(dto.getPassword()), "Hotel_Owner");
		HotelDetails owner=new HotelDetails(dto.getFirstName(),dto.getLastName(),dto.getMobileNo(),dto.getHotelName(),dto.getLicenseNo());
		Registerdetail.setHotelOwner(owner);
		owner.setRegistrationDetail(Registerdetail);
		 
		 registerRepo.save(Registerdetail);
		
	}
	
 
}