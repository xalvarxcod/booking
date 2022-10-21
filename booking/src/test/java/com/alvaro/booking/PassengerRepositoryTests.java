package com.alvaro.booking;

import com.alvaro.booking.repository.AirportRepository;
import com.alvaro.booking.repository.PassengerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

public class PassengerRepositoryTests {
    @Autowired
    private PassengerRepository repo;
    @Autowired
    private TestEntityManager entityManager;
}
