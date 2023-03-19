package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
@Entity
public class PaymentDetail {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="transactio_id")
	private Long transation;
	@Column(name="amount")
	private double amount;
	@Column(name="account_holder_name")
	private String AccountHolderName;
	
	@Column(name="ifsc_code")
	private String IfscCode;
	
	@Column(name="bank_name")
	private String BankName;
	@OneToOne
	private BookingDetails bookingDetails;
	

	public BookingDetails getBookingDetails() {
		return bookingDetails;
	}

	public void setBookingDetails(BookingDetails bookingDetails) {
		this.bookingDetails = bookingDetails;
	}

	@Override
	public String toString() {
		return "PaymentDetail [transation=" + transation + ", amount=" + amount + ", AccountHolderName="
				+ AccountHolderName + ", IfscCode=" + IfscCode + ", BankName=" + BankName + "]";
	}

	public PaymentDetail(Long transation, double amount, String accountHolderName) {
		super();
		this.transation = transation;
		this.amount = amount;
		AccountHolderName = accountHolderName;
		
	}

	public PaymentDetail() {
		// TODO Auto-generated constructor stub
	}

	

	public Long getTransation() {
		return transation;
	}

	public void setTransation(Long transation) {
		this.transation = transation;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public String getAccountHolderName() {
		return AccountHolderName;
	}

	public void setAccountHolderName(String accountHolderName) {
		AccountHolderName = accountHolderName;
	}

	public String getIfscCode() {
		return IfscCode;
	}

	public void setIfscCode(String ifscCode) {
		IfscCode = ifscCode;
	}

	public String getBankName() {
		return BankName;
	}

	public void setBankName(String bankName) {
		BankName = bankName;
	}
	
	

}
