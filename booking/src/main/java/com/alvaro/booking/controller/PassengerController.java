package com.alvaro.booking.controller;

import com.alvaro.booking.model.Airport;
import com.alvaro.booking.model.Passenger;
import com.alvaro.booking.service.AirportService;
import com.alvaro.booking.service.PassengerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/passenger")
public class PassengerController {
    @Autowired
    private PassengerService passengerService;

    @PostMapping("/add")
    public String add(@RequestBody Passenger passenger){
        passengerService.savePassenger(passenger);
        return "New passenger is added";
    }

    @GetMapping("/getAll")
    public List<Passenger> getAllAirports(){
        return passengerService.getAllPassengers();
    }
}
