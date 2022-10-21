package com.alvaro.booking.service;

import com.alvaro.booking.model.Airport;

import java.util.List;

public interface AirportService {
    public Airport saveAirport(Airport airport);
    public List<Airport> getAllAirports();
}
