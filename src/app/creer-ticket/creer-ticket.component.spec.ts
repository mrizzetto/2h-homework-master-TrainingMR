import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerTicketComponent } from './creer-ticket.component';

describe('CreerTicketComponent', () => {
  let component: CreerTicketComponent;
  let fixture: ComponentFixture<CreerTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
