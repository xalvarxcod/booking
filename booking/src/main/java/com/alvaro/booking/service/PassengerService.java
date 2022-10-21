package com.alvaro.booking.service;

import com.alvaro.booking.model.Airport;
import com.alvaro.booking.model.Passenger;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface PassengerService {

    public Passenger savePassenger(Passenger passenger);

    public List<Passenger> getAllPassengers();
}
