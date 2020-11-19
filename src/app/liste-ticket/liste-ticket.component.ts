import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Ticket } from '../../interfaces/ticket.interface';
import { User } from '../../interfaces/user.interface';
import { BackendService } from '../backend.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-liste-ticket',
  templateUrl: './liste-ticket.component.html',
  styleUrls: ['./liste-ticket.component.css']
})
export class ListeTicketComponent implements OnInit {

  public readonly users$: Observable<User[]> = this.backendService.users();
  public readonly tickets$: Observable<Ticket[]> = this.backendService.tickets();

  constructor(private readonly backendService: BackendService, private router: Router) { }

  ngOnInit(): void {
  }

  voirDetailsTicket(tkt:Ticket){
    this.router.navigate(['/detailTicket'],  { queryParams:{id:tkt.id }});
  }

}
