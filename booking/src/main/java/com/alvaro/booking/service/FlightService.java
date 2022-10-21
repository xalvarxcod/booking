package com.alvaro.booking.service;

import com.alvaro.booking.model.Airport;
import com.alvaro.booking.model.Flight;

import java.util.List;

public interface FlightService {
    public Flight saveFlight(Flight flight);

    public List<Flight> getAllFlights();
}
