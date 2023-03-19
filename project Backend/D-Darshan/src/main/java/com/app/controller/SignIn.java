package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AuthRequest;
import com.app.dto.AuthResp;
import com.app.jwtUtils.JwtUtils;
import com.app.pojos.RegistrationDetail;
import com.app.repository.RegistrationRepository;
import com.app.service.RegisterService;

import lombok.extern.slf4j.Slf4j;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/auth")
@Slf4j
public class SignIn {
//dep : JWT utils : for generating JWT
	@Autowired
	private JwtUtils utils;
	// dep : Auth mgr
	@Autowired
	private AuthenticationManager manager;
	
	// dep : user service for handling users
	@Autowired
	private RegistrationRepository registerRepo;

	// add a method to authenticate user . In case of success --send back token ,
	// o.w
	// send back err mesg
	
	@PostMapping("/signin")
	public ResponseEntity<?> validateUserCreateToken(@RequestBody AuthRequest request) {
		System.out.println(request);
		UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(request.getUserName(),
				request.getPassword());
		log.info("auth token " + authToken);
		try {
			// authenticate the credentials
			Authentication authenticatedDetails = manager.authenticate(authToken);
			log.info("auth token again " + authenticatedDetails);
			RegistrationDetail user = registerRepo.findBymobileNum(request.getUserName());
			// => auth succcess
			
			return ResponseEntity.ok(new AuthResp("Auth successful!", utils.generateJwtToken(authenticatedDetails),user.getUser().getUserName(),user.getEmail(),user.getMobileNo(),user.getRole(),user.getUser().getId()));
			
		} catch (BadCredentialsException e) { // later replace this by a method in global exc handler
			// send back err resp code
			System.out.println("err " + e);
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
		}
	}
	@PostMapping("/hotel/signin")
	public ResponseEntity<?> validateHotelOwnerCreateToken(@RequestBody AuthRequest request) {
		System.out.println(request);
		UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(request.getUserName(),
				request.getPassword());
		log.info("auth token " + authToken);
		try {
			// authenticate the credentials
			Authentication authenticatedDetails = manager.authenticate(authToken);
			log.info("auth token again " + authenticatedDetails);
			RegistrationDetail user = registerRepo.findBymobileNum(request.getUserName());
			// => auth succcess
			
			return ResponseEntity.ok(new AuthResp("Auth successful!", utils.generateJwtToken(authenticatedDetails),user.getHotelOwner().getFirstName(),user.getEmail(),user.getMobileNo(),user.getRole(),user.getUser().getId()));
			
		} catch (BadCredentialsException e) { // later replace this by a method in global exc handler
			// send back err resp code
			System.out.println("err " + e);
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
		}
	}
}
