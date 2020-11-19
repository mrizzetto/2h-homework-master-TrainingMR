import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CreerTicketComponent } from './creer-ticket/creer-ticket.component';
import { DetailTicketComponent } from './detail-ticket/detail-ticket.component';
import { ListeTicketComponent } from './liste-ticket/liste-ticket.component';


// Définition des différentes routes
const routes: Routes = [
  { path: '',   redirectTo: 'listeTicket', pathMatch: 'full' }, // redirection 
  { path: 'listeTicket', component: ListeTicketComponent, },
  { path: 'creerTicket', component: CreerTicketComponent, },
  { path: 'detailTicket', component: DetailTicketComponent },
  // { path: 'detailTicket/:id', component: DetailTicketComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }
