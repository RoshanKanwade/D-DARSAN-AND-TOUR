package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.BookingDetails;
import com.app.pojos.PaymentDetail;

public interface PaymentRepo extends JpaRepository<PaymentDetail, Long>{
	public  PaymentDetail  save(PaymentDetail payDetails);
}