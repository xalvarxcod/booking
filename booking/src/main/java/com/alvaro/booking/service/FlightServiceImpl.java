package com.alvaro.booking.service;

import com.alvaro.booking.model.Airport;
import com.alvaro.booking.model.Flight;
import com.alvaro.booking.repository.AirportRepository;
import com.alvaro.booking.repository.FlightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FlightServiceImpl implements FlightService {

    @Autowired
    private FlightRepository flightRepository;

    @Override
    public Flight saveFlight(Flight flight) {
        return flightRepository.save(flight);
    }

    @Override
    public List<Flight> getAllFlights() {
        return flightRepository.findAll();
    }


}
