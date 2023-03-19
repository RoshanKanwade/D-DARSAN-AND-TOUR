package com.app.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.app.pojos.RegistrationDetail;
import com.app.repository.RegistrationRepository;


@Service
@Transactional
public class CustomUserDetailsService implements UserDetailsService {
	@Autowired
	private RegistrationRepository userRepo;

	@Override
	public UserDetails loadUserByUsername(String mobileNo) throws UsernameNotFoundException {
		RegistrationDetail user=userRepo.findBymobileNum(mobileNo);
				
		//use email valid
		return new CustomUserDetails(user);
	}

}