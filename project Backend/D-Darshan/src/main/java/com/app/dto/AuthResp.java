package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor

public class AuthResp {
	private String message;
	private String jwt;
	private String userName;
	private String email ;
	private String mobileNo;
	private String Role;
	private Long Id;
	public AuthResp(String message, String jwt, String userName, String email, String mobileNo, String role, Long id) {
		super();
		this.message = message;
		this.jwt = jwt;
		this.userName = userName;
		this.email = email;
		this.mobileNo = mobileNo;
		Role = role;
		Id = id;
	}
}
