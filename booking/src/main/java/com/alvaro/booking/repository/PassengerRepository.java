package com.alvaro.booking.repository;

import com.alvaro.booking.model.Passenger;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.io.Serializable;

@Repository
public interface PassengerRepository extends JpaRepository<Passenger, Serializable> {
}
