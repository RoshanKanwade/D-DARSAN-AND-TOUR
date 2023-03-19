package com.app.service;


import com.app.dto.HotelregistrationDetails;
import com.app.dto.RegisteredDto;
import com.app.exceptionhHandling.UsernameNotFoundException;
import com.app.pojos.RegistrationDetail;
import com.app.pojos.User;


public interface RegisterService{
	
public boolean RegisterUser(RegisteredDto dto) ;

public RegistrationDetail findByMobileNo(RegisteredDto dto) ;

public void save(RegisteredDto dto);
	
public RegistrationDetail findOwnerByMobileNo(HotelregistrationDetails dto);
public void save(HotelregistrationDetails dto);
}
