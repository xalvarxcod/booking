package com.alvaro.booking.controller;

import com.alvaro.booking.model.Airport;
import com.alvaro.booking.model.Ticket;
import com.alvaro.booking.service.AirportService;
import com.alvaro.booking.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ticket")
public class TicketController {
    @Autowired
    private TicketService ticketService;

    @PostMapping("/add")
    public String add(@RequestBody Ticket ticket){
        ticketService.saveTicket(ticket);
        return "New ticket is added";
    }

    @GetMapping("/getAll")
    public List<Ticket> getAllTickets(){
        return ticketService.getAllTickets();
    }
}
