import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { User } from '../../interfaces/user.interface';
import { BackendService } from '../backend.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-creer-ticket',
  templateUrl: './creer-ticket.component.html',
  styleUrls: ['./creer-ticket.component.css']
})
export class CreerTicketComponent implements OnInit {

  tabUsers:User[];
  description: string = '';
  userIdSelected:number = null;

  public readonly users$: Observable<User[]> = this.backendService.users();
  
  constructor(private readonly backendService: BackendService) {  }

  ngOnInit(): void { }

  setDescription(value) {
    this.description = value;
  }

  /**
   * Permet de récupérer la valeur modifiée de la liste Select
   * @param e event de modification
   */
  selected(e){
    this.userIdSelected = e.target.value
  }

  /**
   * Permet la création du ticket
   */
  creerUnTicket():void{
    
    this.backendService.newTicket(this.description).subscribe(ticket => {
      // On recupere l'utilisateur sélectionné pour attribuer l'user au ticket et on appelle assign
      this.backendService.assign(ticket.id,this.userIdSelected).subscribe(ticket=>{
      });

    })
    
    
  }

 

}
