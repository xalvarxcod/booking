package com.alvaro.booking;

import com.alvaro.booking.repository.AirportRepository;
import com.alvaro.booking.repository.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

public class TicketRepositoryTests {
    @Autowired
    private TicketRepository repo;
    @Autowired
    private TestEntityManager entityManager;
}
