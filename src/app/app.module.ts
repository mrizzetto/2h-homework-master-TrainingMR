import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BackendService } from './backend.service';

    
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CreerTicketComponent } from './creer-ticket/creer-ticket.component';
import { DetailTicketComponent } from './detail-ticket/detail-ticket.component';
import { AppRoutingModule } from './app-routing.module';
import { ListeTicketComponent } from './liste-ticket/liste-ticket.component';
import { FormsModule } from '@angular/forms';



@NgModule({
    declarations: [AppComponent, CreerTicketComponent, DetailTicketComponent, ListeTicketComponent],
    imports: [BrowserModule, Ng2SmartTableModule, AppRoutingModule, FormsModule],
    providers: [BackendService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
