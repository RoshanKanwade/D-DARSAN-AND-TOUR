package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Admin{
@Id
@Column(name="admin_id")
private long adminId;

@Column(name ="admin_name")
private String adminName;
private String email;
private String password;
public Admin(long adminId, String adminName, String email, String password) {
	super();
	this.adminId = adminId;
	this.adminName = adminName;
	this.email = email;
	this.password = password;
}
public long getAdminId() {
	return adminId;
}
public String getAdminName() {
	return adminName;
}
public String getEmail() {
	return email;
}
public String getPassword() {
	return password;
}
@Override
public String toString() {
	return "Admin [adminId=" + adminId + ", adminName=" + adminName + ", email=" + email + ", password=" + password
			+ "]";
}







}
