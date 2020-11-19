import { Component, Input, OnInit } from '@angular/core';
import { Ticket } from 'src/interfaces/ticket.interface';

import { Observable } from 'rxjs';

import { ActivatedRoute  } from '@angular/router';
import { BackendService } from '../backend.service';
import { User } from 'src/interfaces/user.interface';


@Component({
  selector: 'app-detail-ticket',
  templateUrl: './detail-ticket.component.html',
  styleUrls: ['./detail-ticket.component.css']
})
export class DetailTicketComponent implements OnInit {


  ticketIdSelected: number = -1;
  ticket:Ticket = null;
  userAssigned:User=null;

  public readonly users$: Observable<User[]> = this.backendService.users();


  constructor(private route: ActivatedRoute, private readonly backendService: BackendService) { }


  ngOnInit(): void {

    // On récupère les params de la requête de route
    this.route.queryParams.subscribe(param => {
     this.ticketIdSelected = param.id;  // on recuper l'id du ticket

     // On recupere le ticket à partir de l'id
     this.backendService.ticket(this.ticketIdSelected).subscribe(tkt => {
        this.ticket = tkt;

        //On recupere l'user assigné à partir de son id
        this.backendService.user(this.ticket.assigneeId).subscribe(usr=>{
          this.userAssigned = usr
        })
       
      })
    });
  }


  /*
   * Pouvoir changer ausi l'uuser assigné au ticket avec une liste déroulante avec zone de recherche
   * 
   */
  enregistrer(){

  }

  /*  Permet de modifier le statut du ticket (ouvert ou clos) */ 
  // appel de la fonction complete du backend

}
