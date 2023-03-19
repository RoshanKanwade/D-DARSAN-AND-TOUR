package com.app.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.pojos.RegistrationDetail;
import com.app.pojos.User;
@Repository
public interface  RegistrationRepository extends JpaRepository<RegistrationDetail, Long> {
@Query("select r from RegistrationDetail r where mobileNo=?1 ")
public RegistrationDetail findBymobileNum(String mobileNo);

public  RegistrationDetail  save(RegistrationDetail registerdetail);


}
