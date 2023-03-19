package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.pojos.RegistrationDetail;
import com.app.pojos.TempleDetails;
@Repository
public interface TempleRepository extends JpaRepository<TempleDetails, Long> {


}
