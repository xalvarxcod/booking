package com.alvaro.booking.repository;


import com.alvaro.booking.model.Flight;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.io.Serializable;

@Repository
public interface FlightRepository extends JpaRepository<Flight, Serializable> {
}
