package com.alvaro.booking;

import com.alvaro.booking.model.Airport;
import com.alvaro.booking.model.Flight;
import com.alvaro.booking.repository.AirportRepository;
import com.alvaro.booking.repository.FlightRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import java.util.Date;

public class FlightRepositoryTests {
    private FlightRepository repo;
    @Autowired
    private TestEntityManager entityManager;

    @Test
    public void testCreateFlight(){
    }
}
