package com.alvaro.booking;

import com.alvaro.booking.model.Airport;
import com.alvaro.booking.repository.AirportRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(false)
public class AirportRepositoryTests {
    @Autowired
    private AirportRepository repo;
    @Autowired
    private TestEntityManager entityManager;
    @Test
    public void testCreateAirport(){
        Airport airport1 = new Airport();
        Airport airport2 = new Airport();
        Airport airport3 = new Airport();
        Airport airport4 = new Airport();
        airport1.setCountry("Spain");
        airport1.setName("Sevilla Airport");
        airport2.setCountry("Belgium");
        airport2.setName("Charleroi Airport");
        airport3.setCountry("France");
        airport3.setName("CDG Airport");
        airport4.setCountry("UK");
        airport4.setName("London Airport");

        entityManager.persist(airport1);
        entityManager.persist(airport2);
        entityManager.persist(airport3);
        entityManager.persist(airport4);
    }
}
