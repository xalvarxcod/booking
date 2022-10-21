package com.alvaro.booking.service;

import com.alvaro.booking.model.Airport;
import com.alvaro.booking.model.Ticket;

import java.util.List;

public interface TicketService {
    public Ticket saveTicket(Ticket ticket);
    public List<Ticket> getAllTickets();
}
