package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.HotelregistrationDetails;
import com.app.dto.RegisteredDto;
import com.app.exceptionhHandling.UsernameNotFoundException;
import com.app.pojos.RegistrationDetail;
import com.app.pojos.User;
import com.app.service.RegisterService;
@RestController
@CrossOrigin(origins = "*")
public class RegisterController {
	@Autowired
	private RegisterService register;
@Autowired
	JavaMailSender javaMailSender;
	@PostMapping(path = "/home/register", consumes = "application/x-www-form-urlencoded")
	public String Register( RegisteredDto dto) throws UsernameNotFoundException {
	RegistrationDetail existingUser = register.findByMobileNo(dto);
        if (existingUser != null) {
         return "allrady registerd ";
        }
        SimpleMailMessage sm = new SimpleMailMessage();
		sm.setFrom("ddarshanandtour@gmail.com");//input the sender email Id or read it from properties file
		sm.setTo(dto.getEmail());
		sm.setSubject("D-darshan registreation don Successfully ");
		sm.setText("Dear "+dto.getUserName() +",\n\n"
				+"UserName"+dto.getMobileNo()
				+ "Thank You for registration.\n" + "regards\n"+ "Team DineEazy");
		javaMailSender.send(sm);
       register.save(dto);
        return "sucssecfull";
	}
	@PostMapping(path = "/home/register/hotel",consumes = "application/x-www-form-urlencoded")
	public String HotelRegister(HotelregistrationDetails dto) {
		System.out.println("fejefff");
		System.out.println(dto);
		RegistrationDetail existingUser = register.findOwnerByMobileNo(dto);
        if (existingUser != null) {
         return "allrady registerd ";
        }
       register.save(dto);
        return "sucssecfull";
	}
}
