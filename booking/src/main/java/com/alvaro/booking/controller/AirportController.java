package com.alvaro.booking.controller;

import com.alvaro.booking.model.Airport;
import com.alvaro.booking.service.AirportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/airport")
public class AirportController {
    @Autowired
    private AirportService airportService;

    @PostMapping("/add")
    public String add(@RequestBody Airport airport){
        airportService.saveAirport(airport);
        return "New airport is added";
    }

    @GetMapping("/getAll")
    public List<Airport> getAllAirports(){
        return airportService.getAllAirports();
    }

}
