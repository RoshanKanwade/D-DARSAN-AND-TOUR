package com.app.pojos;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
public class User{
	@Id
	@GeneratedValue(strategy =GenerationType.AUTO)
	private Long userId;

	
@Column(name = "user_name")
	private String userName;
@OneToOne (fetch = FetchType.LAZY)
@JoinColumn(name="unique_id")
private RegistrationDetail registration;
@OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
private List<BookingDetails> boolingDetails;
public User() {
	super();
}

public List<BookingDetails> getBoolingDetails() {
	return boolingDetails;
}
public Long getId() {
	return userId;
	}

	public void setId(Long id) {
	this.userId = id;
	}
public void setBoolingDetails(List<BookingDetails> boolingDetails) {
	this.boolingDetails = boolingDetails;
}

public User(String userName) {
	super();
	this.userName = userName;
}

public RegistrationDetail getRegistration() {
	return registration;
}

public void setRegistration(RegistrationDetail registration) {
	this.registration = registration;
}

public String getUserName() {
	return userName;
}


public void setUserName(String userName) {
	this.userName = userName;
}

@Override
public String toString() {
	return "User [userName=" + userName + "]";
}


}
