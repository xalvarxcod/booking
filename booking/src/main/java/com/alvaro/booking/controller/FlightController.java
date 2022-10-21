package com.alvaro.booking.controller;

import com.alvaro.booking.model.Flight;
import com.alvaro.booking.service.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/flight")
public class FlightController {
    @Autowired
    private FlightService flightService;

    @PostMapping("/add")
    public String add(@RequestBody Flight flight){
        flightService.saveFlight(flight);
        return "New flight is added";
    }

    @GetMapping("/getAll")
    public List<Flight> getAllFlights(){
        return flightService.getAllFlights();
    }
}
